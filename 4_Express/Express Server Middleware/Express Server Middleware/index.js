// Please don't change the pre-written code.

const express = require("express");
const app = express();

const logRequest = (req, res, next) => {
  // Write your code here
  console.log(`${req.method}`);
  console.log(`${req.path}`);
  next();
};

// Apply the middleware for every GET request at the root path
app.use("/", logRequest);


app.get("/", (req, res) => {
  res.send("Coding Ninjas!");
});

module.exports = app;
