const express = require('express');
const User = require('../models/user');
const password = require('../config/actionsPassword');
const router = express.Router();

router.get('/users', (req,res, next) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch(next);
});

router.post('/users', (req, res, next) => {
    // console.log(req.body);
    // req.body.password = password(req.body.password);
    console.log(password('Holaa####', req.body.password));
    // setTimeout(() => {
    //     console.log('Body dos:', req.body);
    // }, 4000)
    // User.create(req.body).then((user) => {
    //     res.send('User created successfull!');
    // }).catch(next);
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