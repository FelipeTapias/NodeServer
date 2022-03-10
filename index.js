const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config()

// set up our express app
const app = express();

const port = process.env.PORT || 4020;

// connect to mongodb
mongoose.connect('mongodb://localhost/DataMongo');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use((err,req,res,next) => { 
    res.status(422).send({error: err.message}); 
});

// listen for requests
app.listen(port, () => {
    console.log(`Now listening for request. PORT ${port}`);
});