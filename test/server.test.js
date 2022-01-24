let app = require ("../src/app")
let supertest = require ("supertest");
let request = supertest(app);


describe("Server connections", () => {
    it("Should listen on port 3000", async () => {
        return await request.get("/")
        .then(res=> {
            let status = res.statusCode
            expect(status).toEqual(200);
        })
    })
})
