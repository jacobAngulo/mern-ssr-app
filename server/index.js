const express = require("express");
const path = require("path");

const server = express();

// Serve static files from the React app
server.use(express.static(path.join(__dirname, "/..client/build")));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/build/index.html"));
});

module.exports = server;
