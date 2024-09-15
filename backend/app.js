const express = require('express');
const path = require('path');
const app = express();
const port = 8443;


// Serve static files from the public directory
app.use(express.static('public'));

// Fallback to 404.html for all other routes
app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});