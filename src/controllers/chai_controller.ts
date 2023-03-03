import {Request, Response} from 'express';
import * as chaiService from '../services/chai_services';

export const getChai = async (req: Request<object, object, object, {chaiName:string|undefined}>, res: Response) => {
    const { chaiName } = req.query;
    const chai = await chaiService.getChai(chaiName as string);
    res.json(chai).status(200);
}

export const getChaiLover = async (req: Request, res: Response) => {
    const chaiLover = await chaiService.getChaiLover();
    res.send(chaiLover).status(200);
}