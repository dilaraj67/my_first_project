import express, { Request, Response } from 'express';
import Stripe from 'stripe';
import { query } from '../db/database';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
});

// Create checkout session
router.post('/create-checkout-session', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const userResult = await query(
      'SELECT email FROM users WHERE id = $1',
      [req.userId]
    );

    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const session = await stripe.checkout.sessions.create({
      customer_email: userResult.rows[0].email,
      payment_method_types: ['card'],
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.FRONTEND_URL}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/subscription/cancel`,
      metadata: {
        userId: req.userId!.toString(),
      },
    });

    res.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Checkout session error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// Webhook to handle Stripe events
router.post('/webhook', express.raw({ type: 'application/json' }), async (req: Request, res: Response) => {
  const sig = req.headers['stripe-signature'] as string;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId;

        if (userId && session.subscription) {
          await query(
            `UPDATE users
             SET subscription_status = 'active',
                 subscription_id = $1,
                 updated_at = CURRENT_TIMESTAMP
             WHERE id = $2`,
            [session.subscription, userId]
          );
        }
        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;

        await query(
          `UPDATE users
           SET subscription_status = $1,
               subscription_end_date = $2,
               updated_at = CURRENT_TIMESTAMP
           WHERE subscription_id = $3`,
          [
            subscription.status,
            new Date(subscription.current_period_end * 1000),
            subscription.id
          ]
        );
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;

        await query(
          `UPDATE users
           SET subscription_status = 'inactive',
               updated_at = CURRENT_TIMESTAMP
           WHERE subscription_id = $1`,
          [subscription.id]
        );
        break;
      }
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

// Get subscription status
router.get('/status', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const result = await query(
      'SELECT subscription_status, subscription_end_date FROM users WHERE id = $1',
      [req.userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = result.rows[0];
    res.json({
      status: user.subscription_status,
      endDate: user.subscription_end_date,
    });
  } catch (error) {
    console.error('Get subscription status error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Cancel subscription
router.post('/cancel', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const result = await query(
      'SELECT subscription_id FROM users WHERE id = $1',
      [req.userId]
    );

    if (result.rows.length === 0 || !result.rows[0].subscription_id) {
      return res.status(404).json({ error: 'No active subscription found' });
    }

    const subscription = await stripe.subscriptions.cancel(result.rows[0].subscription_id);

    res.json({ success: true, endDate: new Date(subscription.current_period_end * 1000) });
  } catch (error) {
    console.error('Cancel subscription error:', error);
    res.status(500).json({ error: 'Failed to cancel subscription' });
  }
});

export default router;
