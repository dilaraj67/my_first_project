import { query } from './database';
import dotenv from 'dotenv';

dotenv.config();

const sampleCafes = [
  {
    name: 'The Daily Grind',
    address: '123 Main Street, San Francisco, CA 94102',
    latitude: 37.7749,
    longitude: -122.4194,
    phone: '+1 (415) 555-0101',
    website: 'https://dailygrind.example.com',
    operating_hours: {
      monday: { open: '07:00', close: '19:00' },
      tuesday: { open: '07:00', close: '19:00' },
      wednesday: { open: '07:00', close: '19:00' },
      thursday: { open: '07:00', close: '19:00' },
      friday: { open: '07:00', close: '20:00' },
      saturday: { open: '08:00', close: '20:00' },
      sunday: { open: '08:00', close: '18:00' },
    },
    has_wifi: true,
    wifi_quality: 'excellent',
    allows_laptops: true,
    laptop_policy: 'Laptops welcome all day. We have plenty of seating and power outlets.',
    power_outlets: true,
    noise_level: 'moderate',
    seating_capacity: 45,
    has_outdoor_seating: true,
    coffee_quality: 'excellent',
    price_range: '$$',
    rating: 4.8,
    total_reviews: 342,
    verified: true,
  },
  {
    name: 'Quiet Corner Cafe',
    address: '456 Oak Avenue, San Francisco, CA 94103',
    latitude: 37.7699,
    longitude: -122.4130,
    phone: '+1 (415) 555-0102',
    website: 'https://quietcorner.example.com',
    operating_hours: {
      monday: { open: '06:30', close: '18:00' },
      tuesday: { open: '06:30', close: '18:00' },
      wednesday: { open: '06:30', close: '18:00' },
      thursday: { open: '06:30', close: '18:00' },
      friday: { open: '06:30', close: '18:00' },
      saturday: { open: '07:00', close: '17:00' },
      sunday: { closed: true },
    },
    has_wifi: true,
    wifi_quality: 'good',
    allows_laptops: true,
    laptop_policy: 'Perfect for remote work. Quiet atmosphere with dedicated work area.',
    power_outlets: true,
    noise_level: 'quiet',
    seating_capacity: 30,
    has_outdoor_seating: false,
    coffee_quality: 'excellent',
    price_range: '$$$',
    rating: 4.9,
    total_reviews: 156,
    verified: true,
  },
  {
    name: 'Brew & Browse',
    address: '789 Market Street, San Francisco, CA 94104',
    latitude: 37.7849,
    longitude: -122.4094,
    phone: '+1 (415) 555-0103',
    operating_hours: {
      monday: { open: '08:00', close: '22:00' },
      tuesday: { open: '08:00', close: '22:00' },
      wednesday: { open: '08:00', close: '22:00' },
      thursday: { open: '08:00', close: '23:00' },
      friday: { open: '08:00', close: '23:00' },
      saturday: { open: '09:00', close: '23:00' },
      sunday: { open: '09:00', close: '21:00' },
    },
    has_wifi: true,
    wifi_quality: 'excellent',
    allows_laptops: true,
    laptop_policy: 'Laptop-friendly cafe with no time limits. Free WiFi for all customers.',
    power_outlets: true,
    noise_level: 'moderate',
    seating_capacity: 60,
    has_outdoor_seating: true,
    coffee_quality: 'good',
    price_range: '$$',
    rating: 4.6,
    total_reviews: 521,
    verified: true,
  },
  {
    name: 'Espresso Express',
    address: '321 Mission Street, San Francisco, CA 94105',
    latitude: 37.7899,
    longitude: -122.3974,
    phone: '+1 (415) 555-0104',
    operating_hours: {
      monday: { open: '06:00', close: '14:00' },
      tuesday: { open: '06:00', close: '14:00' },
      wednesday: { open: '06:00', close: '14:00' },
      thursday: { open: '06:00', close: '14:00' },
      friday: { open: '06:00', close: '14:00' },
      saturday: { open: '07:00', close: '13:00' },
      sunday: { closed: true },
    },
    has_wifi: false,
    allows_laptops: false,
    laptop_policy: 'Quick service cafe. Laptops not encouraged during peak hours.',
    power_outlets: false,
    noise_level: 'loud',
    seating_capacity: 15,
    has_outdoor_seating: false,
    coffee_quality: 'excellent',
    price_range: '$',
    rating: 4.4,
    total_reviews: 89,
    verified: true,
  },
  {
    name: 'The Productivity Pod',
    address: '555 Valencia Street, San Francisco, CA 94110',
    latitude: 37.7629,
    longitude: -122.4214,
    phone: '+1 (415) 555-0105',
    website: 'https://productivitypod.example.com',
    operating_hours: {
      monday: { open: '07:00', close: '20:00' },
      tuesday: { open: '07:00', close: '20:00' },
      wednesday: { open: '07:00', close: '20:00' },
      thursday: { open: '07:00', close: '20:00' },
      friday: { open: '07:00', close: '20:00' },
      saturday: { open: '08:00', close: '19:00' },
      sunday: { open: '08:00', close: '19:00' },
    },
    has_wifi: true,
    wifi_quality: 'excellent',
    allows_laptops: true,
    laptop_policy: 'Designed for remote workers. High-speed WiFi, private booths available.',
    power_outlets: true,
    noise_level: 'quiet',
    seating_capacity: 40,
    has_outdoor_seating: false,
    coffee_quality: 'good',
    price_range: '$$$',
    rating: 4.7,
    total_reviews: 234,
    verified: true,
  },
];

async function seed() {
  try {
    console.log('Seeding database with sample cafes...');

    for (const cafe of sampleCafes) {
      await query(
        `INSERT INTO cafes (
          name, address, latitude, longitude, phone, website,
          operating_hours, has_wifi, wifi_quality, allows_laptops, laptop_policy,
          power_outlets, noise_level, seating_capacity, has_outdoor_seating,
          coffee_quality, price_range, rating, total_reviews, verified
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
        ON CONFLICT (google_place_id) DO NOTHING`,
        [
          cafe.name,
          cafe.address,
          cafe.latitude,
          cafe.longitude,
          cafe.phone || null,
          cafe.website || null,
          JSON.stringify(cafe.operating_hours),
          cafe.has_wifi,
          cafe.wifi_quality || null,
          cafe.allows_laptops,
          cafe.laptop_policy || null,
          cafe.power_outlets,
          cafe.noise_level || null,
          cafe.seating_capacity || null,
          cafe.has_outdoor_seating,
          cafe.coffee_quality || null,
          cafe.price_range || null,
          cafe.rating || null,
          cafe.total_reviews || 0,
          cafe.verified || false,
        ]
      );
    }

    console.log('✅ Successfully seeded database with sample cafes!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seed();
