let mongoose = require ('mongoose')

let Userschema = new mongoose.Schema({
    name: String,
    email: String,
    pass: String
})

let User = mongoose.model({User, Userschema})

module.exports = User;