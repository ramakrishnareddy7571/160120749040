const axios = require('axios');

// API endpoint for getting all train details
const trainsUrl = 'http://20.244.56.144/train/trains';

// Replace 'YOUR_AUTHORIZATION_TOKEN' with the actual authorization token you obtained previously
const authorizationToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE0MjIyNzcsImNvbXBhbnlOYW1lIjoiUmFtYWtyaXNobmEgUmFpbHdheXMiLCJjbGllbnRJRCI6Ijk0MDQ5MjY5LThiMTgtNGQ3MS1iODBjLWQ1YjMwNDFiMTgyMiIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIxNjAxMjA3NDkwNDAifQ.IS56O-V_zqzJlUp7ClTt3WT-tLgMfwywMM6pnLfx5qw';

// Set the authorization token in the request headers
const headers = {
  Authorization: `Bearer ${authorizationToken}`,
};

// Make the GET request using Axios
axios
  .get(trainsUrl, { headers })
  .then((response) => {
    // Handle the response
    const trainsData = response.data;
    console.log('Train Details:', trainsData);
    // Process the train data as needed
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
