# CafeFinder ☕

A luxurious, subscription-based cafe discovery application that helps users find the perfect workspace with detailed information about WiFi, laptop policies, operating hours, and more.

## Features

### Core Functionality
- 🗺️ **Location-Based Search** - Find cafes near you using geolocation
- 📶 **WiFi Information** - Know which cafes have reliable WiFi and quality ratings
- 💻 **Laptop Policies** - Discover laptop-friendly cafes with detailed policies
- ⏰ **Operating Hours** - Complete weekly schedule for every cafe
- ⚡ **Power Outlets** - Find cafes with available power outlets
- 🔇 **Noise Levels** - Choose the right ambiance for your work
- ⭐ **Ratings & Reviews** - See what others think
- 💰 **Price Range** - Budget-friendly to premium options

### Subscription Features ($0.99/month)
- Unlimited cafe searches
- Full cafe details and contact information
- Save favorite cafes
- Priority access to new features
- Cancel anytime

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **TailwindCSS** - Luxurious, responsive design
- **Framer Motion** - Smooth animations
- **Zustand** - State management
- **React Router** - Navigation
- **Stripe** - Payment processing
- **Vite** - Fast development and builds

### Backend
- **Node.js** with Express
- **TypeScript**
- **PostgreSQL** - Database
- **JWT** - Authentication
- **Stripe** - Subscription management
- **Bcrypt** - Password hashing

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL 14+
- Stripe account (for payments)
- Google Places API key (optional, for enhanced data)

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd my_first_project
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up the database**
```bash
# Create a PostgreSQL database
createdb cafe_finder

# Run the schema
psql cafe_finder < backend/src/db/schema.sql
```

4. **Configure environment variables**

Backend (.env):
```bash
cd backend
cp .env.example .env
# Edit .env with your configuration
```

Required backend variables:
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `STRIPE_SECRET_KEY` - Stripe secret key
- `STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
- `STRIPE_PRICE_ID` - Stripe subscription price ID
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook secret

Frontend (.env):
```bash
cd ../frontend
cp .env.example .env
# Edit .env with your configuration
```

Required frontend variables:
- `VITE_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key

5. **Seed sample data (optional)**
```bash
cd backend
npm run dev -- src/db/seed.ts
```

6. **Start the development servers**

From the root directory:
```bash
npm run dev
```

This will start:
- Backend API on `http://localhost:3001`
- Frontend on `http://localhost:5173`

## Setting Up Stripe

1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe Dashboard
3. Create a subscription product:
   - Go to Products → Add Product
   - Set price to $0.99/month
   - Copy the Price ID
4. Set up webhooks:
   - Go to Developers → Webhooks
   - Add endpoint: `http://your-domain/api/subscription/webhook`
   - Select events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`
   - Copy the webhook secret

## Project Structure

```
my_first_project/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   │   ├── database.ts      # Database connection
│   │   │   ├── schema.sql       # Database schema
│   │   │   └── seed.ts          # Sample data
│   │   ├── middleware/
│   │   │   └── auth.ts          # Authentication middleware
│   │   ├── routes/
│   │   │   ├── auth.ts          # Auth endpoints
│   │   │   ├── cafes.ts         # Cafe endpoints
│   │   │   └── subscription.ts  # Subscription endpoints
│   │   └── server.ts            # Express server
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── CafeCard.tsx
│   │   │   ├── CafeDetail.tsx
│   │   │   └── SubscriptionModal.tsx
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   ├── AuthPage.tsx
│   │   │   └── SubscriptionPage.tsx
│   │   ├── lib/
│   │   │   └── api.ts           # API client
│   │   ├── store/
│   │   │   └── useStore.ts      # Zustand store
│   │   ├── types/
│   │   │   └── index.ts         # TypeScript types
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.ts
└── package.json                  # Root package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Cafes
- `GET /api/cafes/search` - Search cafes (query params: lat, lng, radius, wifi, laptops)
- `GET /api/cafes/:id` - Get cafe details (requires subscription)
- `POST /api/cafes/:id/favorite` - Add to favorites (requires subscription)
- `DELETE /api/cafes/:id/favorite` - Remove from favorites (requires subscription)
- `GET /api/cafes/favorites/list` - Get user's favorites (requires subscription)

### Subscription
- `POST /api/subscription/create-checkout-session` - Create Stripe checkout
- `POST /api/subscription/webhook` - Stripe webhook handler
- `GET /api/subscription/status` - Get subscription status
- `POST /api/subscription/cancel` - Cancel subscription

## Database Schema

### Users Table
- User authentication and profile
- Subscription status and details

### Cafes Table
- Comprehensive cafe information
- Location data (latitude/longitude)
- Features (WiFi, laptops, outlets, etc.)
- Operating hours (JSONB)
- Ratings and reviews

### Favorites Table
- User's saved cafes

### Reviews Table
- User reviews and ratings

## Deployment

### Backend Deployment
1. Set up PostgreSQL database on your hosting provider
2. Set all environment variables
3. Run database migrations
4. Deploy Node.js application

### Frontend Deployment
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder to your static hosting provider (Vercel, Netlify, etc.)
3. Set environment variables

### Recommended Hosting
- **Backend**: Railway, Render, or Heroku
- **Frontend**: Vercel or Netlify
- **Database**: Railway, Render, or Supabase

## Development

### Adding New Cafes
You can add cafes manually through the database or integrate with Google Places API for automated data collection.

### Customization
- Update colors in `frontend/tailwind.config.js`
- Modify subscription price in Stripe Dashboard
- Add new features to the cafe schema

## License

MIT

## Support

For issues and questions, please create an issue in the repository.

---

Built with ❤️ for remote workers and cafe enthusiasts
