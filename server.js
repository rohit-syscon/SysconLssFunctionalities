const express = require('express');
const path = require('path');
const mongoose = require('./db');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});