// Import Express
import express from 'express';

// Create an Express app
const app = express();

// Define a port
const port = 3000;

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});