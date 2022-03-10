const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/users', (req,res, next) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch(next);
});

router.post('/users', (req, res, next) => {
    User.create(req.body).then((user) => {
        res.send(user);
    }).catch(next);
});

router.put('/users/', (req, res, next) => {
    User.findOneAndUpdate({_id: req.query.id}, req.body).then((user) => {
        res.send('User updated successfull!');
    }).catch(next);
});

router.delete('/users', (req, res, next) => {
    User.deleteOne({_id: req.query.id}).then((user) => {
        console.log(req.params.id);
        res.send('User deleted successfull!');
    }).catch(next);
});

module.exports = router;