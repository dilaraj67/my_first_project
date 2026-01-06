import express, { Request, Response } from 'express';
import { query } from '../db/database';
import { optionalAuth, requireSubscription, AuthRequest } from '../middleware/auth';

const router = express.Router();

// Calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Search cafes by location
router.get('/search', optionalAuth, async (req: AuthRequest, res: Response) => {
  const { lat, lng, radius = 5, wifi, laptops, openNow, limit = 20 } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ error: 'Latitude and longitude required' });
  }

  try {
    const latitude = parseFloat(lat as string);
    const longitude = parseFloat(lng as string);
    const searchRadius = parseFloat(radius as string);

    // Build query with filters
    let queryText = `
      SELECT
        id, name, address, latitude, longitude, phone, website,
        operating_hours, has_wifi, wifi_quality, allows_laptops, laptop_policy,
        power_outlets, noise_level, seating_capacity, has_outdoor_seating,
        coffee_quality, price_range, rating, total_reviews, image_url, verified
      FROM cafes
      WHERE 1=1
    `;
    const params: any[] = [];

    if (wifi === 'true') {
      queryText += ` AND has_wifi = true`;
    }

    if (laptops === 'true') {
      queryText += ` AND allows_laptops = true`;
    }

    queryText += ` ORDER BY rating DESC NULLS LAST LIMIT $${params.length + 1}`;
    params.push(parseInt(limit as string));

    const result = await query(queryText, params);

    // Filter by distance and add distance to results
    const cafes = result.rows
      .map(cafe => ({
        ...cafe,
        distance: calculateDistance(latitude, longitude, cafe.latitude, cafe.longitude)
      }))
      .filter(cafe => cafe.distance <= searchRadius)
      .sort((a, b) => a.distance - b.distance);

    // For free users, limit results and hide some details
    const isSubscribed = req.userId; // Simplified - check actual subscription in production
    const response = isSubscribed
      ? cafes
      : cafes.slice(0, 3).map(cafe => ({
          ...cafe,
          phone: undefined,
          website: undefined,
          laptop_policy: undefined,
        }));

    res.json({
      cafes: response,
      total: cafes.length,
      requiresSubscription: !isSubscribed && cafes.length > 3,
    });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single cafe details (requires subscription)
router.get('/:id', requireSubscription, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;

  try {
    const result = await query(
      `SELECT
        id, name, address, latitude, longitude, phone, website,
        operating_hours, has_wifi, wifi_quality, allows_laptops, laptop_policy,
        power_outlets, noise_level, seating_capacity, has_outdoor_seating,
        coffee_quality, price_range, rating, total_reviews, image_url, verified,
        created_at, updated_at
      FROM cafes
      WHERE id = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cafe not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Get cafe error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add cafe to favorites
router.post('/:id/favorite', requireSubscription, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;

  try {
    await query(
      'INSERT INTO favorites (user_id, cafe_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
      [req.userId, id]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Add favorite error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Remove cafe from favorites
router.delete('/:id/favorite', requireSubscription, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;

  try {
    await query(
      'DELETE FROM favorites WHERE user_id = $1 AND cafe_id = $2',
      [req.userId, id]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Remove favorite error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get user's favorites
router.get('/favorites/list', requireSubscription, async (req: AuthRequest, res: Response) => {
  try {
    const result = await query(
      `SELECT c.* FROM cafes c
       INNER JOIN favorites f ON c.id = f.cafe_id
       WHERE f.user_id = $1
       ORDER BY f.created_at DESC`,
      [req.userId]
    );

    res.json(result.rows);
  } catch (error) {
    console.error('Get favorites error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
