// Core
//const request = require("supertest");
import request from "supertest";

// Instruments
import { app } from "../../source/server.js";

describe('should handle get request', () => {
    test('should return status 200', (done) => {
        request(app)
            .get('/test')
            .expect(200, done)
    })
})