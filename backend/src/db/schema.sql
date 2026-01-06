-- Users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    subscription_status VARCHAR(50) DEFAULT 'inactive',
    subscription_id VARCHAR(255),
    subscription_end_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cafes table
CREATE TABLE IF NOT EXISTS cafes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    phone VARCHAR(50),
    website VARCHAR(500),
    google_place_id VARCHAR(255) UNIQUE,

    -- Operating hours (JSON format: {"monday": {"open": "08:00", "close": "18:00"}, ...})
    operating_hours JSONB,

    -- Cafe features
    has_wifi BOOLEAN DEFAULT NULL,
    wifi_quality VARCHAR(50), -- 'excellent', 'good', 'fair', 'poor'
    allows_laptops BOOLEAN DEFAULT NULL,
    laptop_policy TEXT, -- Additional details about laptop policy

    -- Additional features
    power_outlets BOOLEAN DEFAULT NULL,
    noise_level VARCHAR(50), -- 'quiet', 'moderate', 'loud'
    seating_capacity INTEGER,
    has_outdoor_seating BOOLEAN DEFAULT NULL,
    coffee_quality VARCHAR(50), -- 'excellent', 'good', 'fair'
    price_range VARCHAR(10), -- '$', '$$', '$$$', '$$$$'

    -- Metadata
    rating DECIMAL(3, 2),
    total_reviews INTEGER DEFAULT 0,
    image_url TEXT,
    verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_cafes_location ON cafes(latitude, longitude);
CREATE INDEX IF NOT EXISTS idx_cafes_wifi ON cafes(has_wifi);
CREATE INDEX IF NOT EXISTS idx_cafes_laptops ON cafes(allows_laptops);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- User favorites table
CREATE TABLE IF NOT EXISTS favorites (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    cafe_id INTEGER REFERENCES cafes(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, cafe_id)
);

-- Reviews table
CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    cafe_id INTEGER REFERENCES cafes(id) ON DELETE CASCADE,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    wifi_confirmed BOOLEAN,
    laptop_confirmed BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
