const express = require('express');
const app = express();

// Define the server port
const PORT = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World! ');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
