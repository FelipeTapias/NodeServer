const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

// set up our express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/ourdata');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(express.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use((err,req,res,next) => { 
    res.status(422).send({error: err.message}); 
});

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Now listening for request. PORT ${process.env.PORT}`);
});