const express = require('express');
const cors = require('cors');
const PORT = 5000
const app = express();
const chefsJson = require('./data/chefs.json')
// Use cors middleware to enable CORS
app.use(cors());

// Define a simple route

// Start the server on port 3000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
