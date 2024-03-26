// Please don't change the pre-written code
// Import the necessary modules here
const fs = require('fs')

const Solution = () => {
  // Write your code here
  try {
    fs.writeFileSync('notes.txt', "The world has enough coders")
  } catch (err) {
    console.log(err);
  }

  const data = fs.readFileSync('notes.txt', { encoding: 'utf-8' })
  console.log(data);

  fs.appendFileSync('notes.txt', " BE A CODING NINJA!");

  const data1 = fs.readFileSync('notes.txt', { encoding: 'utf-8' })
  console.log(data1);

};
Solution();
module.exports = Solution;