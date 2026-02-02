export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { zip } = req.query;

  if (!zip) {
    return res.status(400).json({ error: 'Zip code is required' });
  }

  const API_KEY = process.env.GOOGLE_API_KEY;

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${API_KEY}`
    );
    const data = await response.json();
    
    return res.status(200).json(data);
  } catch (error) {
    console.error('Geocoding error:', error);
    return res.status(500).json({ error: 'Failed to geocode zip code' });
  }
}
