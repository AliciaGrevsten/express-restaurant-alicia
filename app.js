const express = require('express');
const app = express();
const path = require('path');

app.use('/assets', express.static(path.join(__dirname, 'public', 'static')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/data', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'data.json'));
});

app.get('/restaurants', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'restaurants.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));