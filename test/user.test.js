let app = require ("../src/app");
let supertest = require ("supertest");
let request = supertest(app);
const mongoose = require("mongoose")
let userModel = require('../src/Models/User')

/* mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true}, {useUnifiedTopology: true}) */

const User = mongoose.model('User', userModel)

describe( "Register User", () => {
    it("Should sign-up an user", () => {
        let time = Date.now();
        let email = `${time}@gmail.com`;
        let user = { name: "Victor", email: email, pass: "123456"};

        return request.post("/user")
        .send(user)
        .then( res => {
            expect(res.body.email).toEqual(email);
        }).catch( (res) =>  {
            console.log(res.body.email)
        })

    })
})