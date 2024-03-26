// Please don't change the pre-written code

const express = require("express");
const server = express();
const path = require('path')

const staticFolder = path.join(__dirname,'public')
const renderStatic = (server,staticFolder) => {
  // Write your code here
  
  server.use(express.static(staticFolder))
};

server.get("/", (req, res) => {
  res.send("get method called!");
});

renderStatic(server,staticFolder);

module.exports = { renderStatic, server };
