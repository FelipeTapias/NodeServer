const express = require('express');
const User = require('../models/user');
const router = express.Router();
const { hashingPassword } = require('../config/actionsPassword');

router.get('/users', (req,res, next) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch(next);
});

router.post('/users', (req, res, next) => {
    hashingPassword(req.body.password)
        .then((newPassword) => {
            req.body.password = newPassword;
            User.create(req.body).then((user) => {
                res.send('User created successfull!');
            }).catch(next);
        })
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