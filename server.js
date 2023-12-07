const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/syscon_test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3000, (req, res) => {
    console.log('listening on port 3000');
})