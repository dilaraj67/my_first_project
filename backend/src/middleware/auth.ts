import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  userId?: number;
  userEmail?: string;
}

export const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: number;
      email: string;
    };
    req.userId = decoded.userId;
    req.userEmail = decoded.email;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};

export const optionalAuth = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        userId: number;
        email: string;
      };
      req.userId = decoded.userId;
      req.userEmail = decoded.email;
    } catch (error) {
      // Token invalid, but continue anyway
    }
  }
  next();
};

export const requireSubscription = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { query } = await import('../db/database');

  if (!req.userId) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const result = await query(
      'SELECT subscription_status, subscription_end_date FROM users WHERE id = $1',
      [req.userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = result.rows[0];
    const isActive = user.subscription_status === 'active' &&
                     (!user.subscription_end_date || new Date(user.subscription_end_date) > new Date());

    if (!isActive) {
      return res.status(403).json({
        error: 'Active subscription required',
        subscriptionRequired: true
      });
    }

    next();
  } catch (error) {
    console.error('Subscription check error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
