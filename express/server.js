const express = require('express');
const app = express();

app.get('/',

    function loggerMidlleware(req, res, next) {
        console.log(req.url);
        next();
    },

    function authMidlleware(req, res, next) {
        console.log('auth', req.query.name);
        setTimeout(() => {
            req.user = req.query.name;
            next();
        }, 1000)
    },

    function guardMiddleware(req, res, next) {
        req.user ? next() : next('forbidden');
    },

    function requestHandler(req, res) {
        // res.send('Hello')
        res.json({
            user: req.user,
            message: 'Hello'
        })
    },

    function errorHandler(err, req, res, next) {
        res.json({ status: 500, err })
    }
)

app.listen(3000, () => console.log('works'))