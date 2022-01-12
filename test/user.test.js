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

        request.post("/user")
            .send(user)
            .then( res => {
                expect(res.statusCode).toEqual(200);
                expect(res.body.email).toEqual(email);
            }).catch( err =>  {
                fail(err);
            })

    })
})