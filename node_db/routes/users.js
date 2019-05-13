const express = require('express');
const router = express.Router();

// Bring in User Model
let User = require('../models/user');

// Login 
router.get('/login', function (req, res) {
    res.render('login');
});

