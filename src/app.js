let express = require("express");
let app = express();
require('dotenv').config();
let mongoose = require("mongoose");

app.use(express.urlencoded({extended: false}))
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/test")

app.get('/', (req, res) => {
    res.json({});
})

app.route('/user')
    .post(function(req, res) {
        res.send({})
    })

module.exports = app;