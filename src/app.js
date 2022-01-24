let express = require("express");
let app = express();
require('dotenv').config();
let mongoose = require("mongoose");

let user = require("./Models/User")

app.use(express.urlencoded({extended: false}))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true}, {useUnifiedTopology: true})

let User = mongoose.model("User", user);

app.get('/', (req, res) => {
    res.json({});
})

app.route('/user')
    .get(function(req,res) {
        res.json({request: req.body})
    })
    .post(async (req, res) => {
    try{
        let newUser = new User ({
            name : req.body.name,
            email : req.body.email,
            pass: req.body.pass
        })
        res.json({email: req.body.email})
        newUser.save()
    }catch(err) {
        console.log(err)
    }

    })

module.exports = app;