# First Date Finder

A quiz-based website that helps you find the perfect first date idea based on your preferences, with location-specific venue suggestions powered by Google Places API.

## Deployment to Vercel

### 1. Push to GitHub
Create a new repository and push this folder to it.

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Before deploying, add your environment variable:
   - Click "Environment Variables"
   - Add: `GOOGLE_API_KEY` = `AIzaSyCnXhencrLVtkuL3-93TNOYh9mxlIH19pA`
5. Click "Deploy"

### 3. Done!
Your site will be live at `your-project-name.vercel.app`

## Project Structure

```
first-date-finder/
├── index.html          # Main website
├── vercel.json         # Vercel configuration
├── api/
│   ├── geocode.js      # Serverless function for zip code geocoding
│   └── places.js       # Serverless function for Google Places search
└── README.md
```

## How It Works

1. User answers 12 questions about their date preferences
2. Optionally enters their zip code
3. The app scores 30 date ideas against their answers
4. Top 10 matches are displayed
5. If a zip code was provided, the serverless functions query Google Places API to find 3 nearby venues for each date idea

## Environment Variables

| Variable | Description |
|----------|-------------|
| `GOOGLE_API_KEY` | Your Google Cloud API key with Geocoding and Places APIs enabled |

## Google Cloud Setup

Make sure your Google Cloud project has these APIs enabled:
- Geocoding API
- Places API

And that your API key has permissions for both.
