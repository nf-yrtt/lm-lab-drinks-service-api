import {Request, Response} from 'express';
import * as coffeeService from '../services/coffee_services';

export const getCoffee = async (req: Request<object, object, object, {coffeeName:string|undefined}>, res: Response) => {
    const { coffeeName } = req.query;
    const coffee = await coffeeService.getCoffee(coffeeName as string);
    res.json(coffee).status(200);
}