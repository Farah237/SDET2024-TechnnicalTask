
 import request from "supertest";
 import { expect } from "chai";
 import { address, register, login } from "../testData.js";

 
 describe("API tests", function () {
     it("creating a new user", async () => {
         const response = await request(address)
         .post("/api/v1/users") 
         .send(register);
             
            
         expect(response.status).toEqual(200);
         
         
     });
   
 
     it("Returns token after creation", async () => {
        let token;
         const response = await request(address)
             .post("/api/v1/users")
             .send(register);
         expect(response.status).equal(200);
         expect(response.body).to.have.property("message");
         expect(response.body.message).equal("User is created successufully");
         expect(response.body).to.have.property("token");
     });
 
     it("Logins successfully", async () => {
        let token;
         const response = await request(address)
             .post("/api/v1/auth")
             .send(login);
         expect(response.status).equal(200);
         expect(response.body).to.have.property("token");
     });
     it("Gets a user ", async()=>{ 
const response =await request(address)
.get("/api/v1/auth")
.set('authorization', token);
    expect(response.statusCode).toEqual(200);


     });
 
     it('Deletes a user', async () => {
         let token;
         const response = await request(address)
             .delete("/api/v1/auth")
             .send({key_admin:''});
         expect(response.statusCode).toEqual(200);
         expect(response.body).to.have.property("message");
         expect(response.body.message).toEqual("Success");
     });

 
 it('Delete All Users', () => {
    it('Should not delete all users with invalid key admin', async () => {
      const response = await request(address).delete('/api/v1/all-users').send({
        key_admin: '',
      });
      expect(response.statusCode).toEqual(403);
      expect(response.body.message).toEqual('Unauthorized access');
    });
  });
 });
 