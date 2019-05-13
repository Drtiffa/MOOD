const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node_db');
let db = mongoose.connection;

// Check connection
db.once('open', function() {
    console.log('Connected to MongoDB');
});
// Check for DB errors
db.on('error', function(err) {
    console.log(err);
});

// Init app
const app = express();

// Home Route
app.get('/', function(req, res) {
    res.send('Hello World');
});

// Route Files
let users = require('./routes/users');
app.use('/users', users);

app.listen( 3001, function() {
    console.log('Server started on port 3001...');
});