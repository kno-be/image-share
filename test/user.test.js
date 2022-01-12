let app = require ("../src/app");
let supertest = require ("supertest");
let request = supertest(app);
let User = require('../src/Models/User')

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