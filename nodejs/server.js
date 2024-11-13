// server.js
const express = require('express');
const app = express();
const port = 3000;  // You can change the port as needed

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, Docker with Node.js!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
