const express = require('express');
const router = express.Router();

router.get('/students', (req,res) => {
    res.send({type: 'GET'});
});

router.post('/students', (req, res) => {
    res.send({
        type: 'POST',
        name: req.body.name,
        roll: req.body.roll
    });
});