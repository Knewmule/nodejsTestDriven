// import request from 'supertest';
const request = require('supertest');
const app = require('../app');

describe('route POST',() =>{
    it('returns 200 OK when signup request is valid', () =>{
        request(app).post('/api/1.0/users')
        .send({
            username: 'user1',
            email: 'user1@mail.com',
            password: 'p4ssword'
        })
        .expect(200)
    })
})

// export default app;
module.exports.handler = app;