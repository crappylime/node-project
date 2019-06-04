const express = require('express');
const app = express();

app.get('/',
    function (req, res, next) {
        console.log(req.url);
        next();
    },

    function (req, res) {
        // res.send('Hello')
        res.json({
            message: 'Hello'
        })
    }
)

app.listen(3000, () => console.log('works'))