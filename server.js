const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/syscon_test');
app.get('/index', (req, res) => {
    
});