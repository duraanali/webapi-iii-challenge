const express = require('express')


// const db = require('../data/dbConfig');


const router = express.Router();

router.post('/', (req, res) => {
    console.log("hello world");
});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
    if (req.user.authenticated)
        return next();

    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    res.status(400).send("invalid user id");

};

function validateUser(req, res, next) {
    if (req.body.authenticated)
        return next();

    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    res.status(400).send("missing user data");
};

function validatePost(req, res, next) {

};

module.exports = router;
