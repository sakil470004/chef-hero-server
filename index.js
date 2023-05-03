const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000
const app = express();
const chefsJson = require('./data/chefs.json')
// Use cors middleware to enable CORS
app.use(cors());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/chefs', (req, res) => {
    res.send(chefsJson);
});
app.get('/greet/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello, ${name}!`);
});
app.get('/chef/:id', (req, res) => {
    const { id } = req.params;
   
    res.send(chef)
});
// Start the server on port 3000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
