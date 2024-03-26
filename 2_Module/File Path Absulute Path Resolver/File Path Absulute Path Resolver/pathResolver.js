const path = require('path')

exports.getAbsolutePath = (filePath) => {
  // Write your code here
  const absolutePath = path.resolve(__dirname, filePath);
  return absolutePath;
};
