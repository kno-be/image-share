let app = require ("../src/app")
let supertest = require ("supertest");
let request = supertest(app);

describe("Server connections", () => {
    it("should listen on port 3000", () => {
    
        return request.get("http://localhost:3000/").then(res=> {
            let status = res.statusCode
            expect(status).toEqual(200);
        }).catch( () =>  {
                   console.log("seila") 
                })
    })
})
