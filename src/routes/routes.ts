import express from 'express';
import * as coffeeController from '../controllers/coffee_controller';
import * as chaiController from '../controllers/chai_controller';

export const router = express.Router();
router.get('/coffee', coffeeController.getCoffee);
router.get('/coffeelover', coffeeController.getCoffeeLover);
router.get('/chai', chaiController.getChai);
router.get('/chailover', chaiController.getChaiLover);