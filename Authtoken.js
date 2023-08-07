const axios = require('axios');

// API endpoint for obtaining the authorization token
const authUrl = 'http://20.244.56.144/train/auth';

// Request body containing clientID and clientSecret
const requestBody = {
  companyName: 'Ramakrishna Railways',
  ownerName: 'RamaKrishna',
  rollNo: '160120749040',
  ownerEmail: 'ramakrishnareddy7571@gmail.com',
  clientID: '94049269-8b18-4d71-b80c-d5b3041b1822',
  clientSecret: 'vXqVeVajLdjpMFvS',
};

// Make the POST request using Axios
axios
  .post(authUrl, requestBody)
  .then((response) => {
    // Handle the response
    const { data } = response;
    if (data && data.access_token) {
      const token = data.access_token;
      console.log('Authorization Token:', token);
      // Save the authorization token securely for future use
    } else {
      console.error('Error: Unable to obtain authorization token.');
    }
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
