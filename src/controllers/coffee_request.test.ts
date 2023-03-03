import request from 'supertest';
import { app } from '../app';

describe('Test Coffee  API endpoint request', () => {
    test('Get /coffeelover should return correct message', async () => {
        const res = await request(app).get('/coffeelover');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('I like coffee!');
    });

    test('Get /coffee should return correct object when queried with latte', async () => {
        const res = await request(app)
            .get('/coffee')
            .query({ coffeeName: 'Latte' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Coffee',
            name: 'Latte',
        });
    });

    test('Get /coffee should return correct object when queried without a parameter', async () => {
        const res = await request(app)
            .get('/coffee');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Coffee',
            name: 'Latte',
        });
    });


    test('Get /coffee should return correct object when queried with flat white', async () => {
        const res = await request(app)
            .get('/coffee')
            .query({ coffeeName: 'Flat White' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Coffee',
            name: 'Flat White',
        });
    });


});
