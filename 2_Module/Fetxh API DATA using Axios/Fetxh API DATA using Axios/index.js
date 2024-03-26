// Please do not change the prewritten code
const axios = require('axios');

const Solution = async () => {
  // Write your code here
  // Import the axios module

  // Make an asynchronous function to fetch data
  async function fetchData() {
    try {
      // Make GET request to the API endpoint
      const response = await axios.get('https://api.codingninjas.com/api/v3/event_tags');

      // Print the response data as specified in the expected output
      console.log('node .\axios.js');
      console.log(response.data);

    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('Error fetching data:', error);
    }
  }

  // Call the fetchData function
  fetchData();
};
Solution();
module.exports = Solution;
