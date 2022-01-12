let mongoose = require ('mongoose')

let userModel = new mongoose.Schema({
    name: String,
    email: String,
    pass: String
})

module.exports = userModel;