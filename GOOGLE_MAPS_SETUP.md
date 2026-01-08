# Google Maps API Setup

This application uses Google Places Autocomplete for the location input feature. Follow these steps to set up your Google Maps API key:

## Steps to Get a Google Maps API Key

1. **Go to Google Cloud Console**
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Sign in with your Google account

2. **Create a New Project** (or select an existing one)
   - Click on the project dropdown at the top
   - Click "New Project"
   - Give it a name (e.g., "CafeFinder")
   - Click "Create"

3. **Enable Required APIs**
   - Go to "APIs & Services" > "Library"
   - Search for and enable the following APIs:
     - **Places API**
     - **Maps JavaScript API**

4. **Create API Credentials**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated API key

5. **Restrict Your API Key** (Recommended for production)
   - Click on the API key you just created
   - Under "Application restrictions", select "HTTP referrers (web sites)"
   - Add your domain (e.g., `localhost:5173/*` for development)
   - Under "API restrictions", select "Restrict key"
   - Select only the APIs you need (Places API, Maps JavaScript API)
   - Click "Save"

## Configure Your Application

1. **Update the .env file**
   - Copy `.env.example` to `.env` if you haven't already:
     ```bash
     cp .env.example .env
     ```

2. **Add your API key to `.env`**
   - Open the `.env` file
   - Replace `your_google_maps_api_key` with your actual API key:
     ```
     VITE_GOOGLE_MAPS_API_KEY=AIza...your-actual-key-here
     ```

3. **Restart the development server**
   ```bash
   npm run dev
   ```

## Features

With Google Places Autocomplete enabled, users can:
- Type a location name, address, or place
- See autocomplete suggestions from Google Places
- Select a location to automatically get its coordinates
- Search for nearby cafes based on the selected location

## Troubleshooting

- **"Error loading Google Maps"**: Check that your API key is correct in the `.env` file
- **Autocomplete not working**: Ensure Places API is enabled in Google Cloud Console
- **API key errors**: Make sure you've enabled both Places API and Maps JavaScript API

## Billing

Google Maps Platform offers a free tier with $200 monthly credit. For most development and small-scale applications, this should be sufficient. Monitor your usage in the Google Cloud Console.
