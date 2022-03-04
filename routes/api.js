const express = require('express');
const router = express.Router();

router.get('/users', (req,res) => {
    res.send({type: 'GET'});
});

router.post('/users', function(req, res) {
    res.send({
        type: 'POST',
        name: req.body.name,
        roll: req.body.roll
    });
});

router.put('/users/:id', (req, res) => {
    res.send({type: 'PUT'});
});

router.delete('/users/:id', (req, res) => {
    res.send({type: 'DELETE'});
});

module.exports = router;