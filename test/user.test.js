let app = require ("../srs/app");
let supertest = require ("supertest");
let request = supertest(app);

describe( "Register User", () => {
    it("Should sign-up an user", () => {
        let time = Date.now();
        let email = `${time}@gmail.com`;
        let user = { name: "Victor", email, pass: "123456"};

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