import request from 'supertest';
import { app } from '../app';

describe('Test chai  API endpoint request', () => {
    test('Get /chailover should return correct message', async () => {
        const res = await request(app).get('/chailover');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('I like Chai!');
    });

    test('Get /chai should return correct object when queried with latte', async () => {
        const res = await request(app)
            .get('/chai')
            .query({ chaiName: 'Karak' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Chai',
            name: 'Karak',
        });
    });

    test('Get /chai should return correct object when queried without a parameter', async () => {
        const res = await request(app)
            .get('/chai');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Chai',
            name: 'Karak',
        });
    });


    test('Get /chai should return correct object when queried with masala', async () => {
        const res = await request(app)
            .get('/chai')
            .query({ chaiName: 'Masala' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Chai',
            name: 'Masala',
        });
    });


});
