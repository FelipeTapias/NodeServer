const express = require('express');
require('dotenv').config()


const app = express();

app.get('/api', (req, res) => res.send('Its Working!'));

app.listen(process.env.PORT || 4000, () => {
    console.log(`Now listening for request. PORT ${process.env.PORT}`);
});