const axios = require('axios');

// API endpoint for company registration
const url = 'http://20.244.56.144/train/register';

// Request body containing company details
const requestBody = {
  companyName: 'Ramakrishna Railways',
  ownerName: 'RamaKrishna',
  rollNo: '160120749040',
  ownerEmail: 'ramakrishnareddy7571@gmail.com',
  accessCode: 'rdxwKw',
};

// Make the POST request using Axios
axios
  .post(url, requestBody)
  .then((response) => {
    // Handle the response
    const { companyName, clientID, clientSecret } = response.data;
    console.log('Company Name:', companyName);
    console.log('Client ID:', clientID);
    console.log('Client Secret:', clientSecret);
    // Save the clientID and clientSecret securely for future use
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
