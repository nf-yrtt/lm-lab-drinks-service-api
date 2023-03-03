import request from 'supertest';
import { app } from '../app';

describe('Test Home API endpoint request', () => {
    test('Get should return correct message', async () => {
        const res = await request(app).get('/');
        expect (res.statusCode).toEqual(200);
        expect(res.text).toEqual('Welcome to the Drinks API');
    });
});
