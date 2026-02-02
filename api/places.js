export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { lat, lng, query } = req.query;

  if (!lat || !lng || !query) {
    return res.status(400).json({ error: 'lat, lng, and query are required' });
  }

  const API_KEY = process.env.GOOGLE_API_KEY;

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=16000&keyword=${encodeURIComponent(query)}&key=${API_KEY}`
    );
    const data = await response.json();
    
    return res.status(200).json(data);
  } catch (error) {
    console.error('Places API error:', error);
    return res.status(500).json({ error: 'Failed to fetch places' });
  }
}
