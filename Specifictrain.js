const axios = require('axios');

// Replace 'YOUR_AUTHORIZATION_TOKEN' with the actual authorization token you obtained previously
const authorizationToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE0MjIyNzcsImNvbXBhbnlOYW1lIjoiUmFtYWtyaXNobmEgUmFpbHdheXMiLCJjbGllbnRJRCI6Ijk0MDQ5MjY5LThiMTgtNGQ3MS1iODBjLWQ1YjMwNDFiMTgyMiIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIxNjAxMjA3NDkwNDAifQ.IS56O-V_zqzJlUp7ClTt3WT-tLgMfwywMM6pnLfx5qw';

// Replace 'SPECIFIC_TRAIN_NUMBER' with the train number for which you want to get details
const specificTrainNumber = '2342';

// API endpoint for getting details of a specific train
const specificTrainUrl = `http://20.244.56.144/train/trains/${specificTrainNumber}`;

// Set the authorization token in the request headers
const headers = {
  Authorization: `Bearer ${authorizationToken}`,
};

// Make the GET request using Axios
axios
  .get(specificTrainUrl, { headers })
  .then((response) => {
    // Handle the response
    const specificTrainData = response.data;
    console.log('Specific Train Details:', specificTrainData);
    // Process the specific train data as needed
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
