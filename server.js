const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS to allow requests from the frontend
app.use(cors());

// API endpoint to fetch train details from John Doe Railway Server
app.get('/api/trains', async (req, res) => {
    console.log("HEllo Rajavardhan");
    
  try {
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE0MjcwMTUsImNvbXBhbnlOYW1lIjoiUmFtYWtyaXNobmEgUmFpbHdheXMiLCJjbGllbnRJRCI6Ijk0MDQ5MjY5LThiMTgtNGQ3MS1iODBjLWQ1YjMwNDFiMTgyMiIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIxNjAxMjA3NDkwNDAifQ.hM9kfhyq3fxpg3d8vVQFxhEEM9zWr68fmE0SuPULU4Y'; // Replace with your actual authorization token
    const apiUrl = 'http://20.244.56.144/train/trains';

    // Make API request to John Doe Railway Server with authorization token in headers
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // Process and filter the data as per your application's requirements
    const trainsData = response.data;

    // Respond with the data to the frontend
    res.json(trainsData);
  } catch (error) {
    console.error('Error fetching train data:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
