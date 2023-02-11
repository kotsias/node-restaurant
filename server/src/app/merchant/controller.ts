import { Request, Response } from 'express';
import { responseError, responseSuccess } from '../responseHandler';
import * as merchantRepository from './repository';

export const createMerchant = async (req: Request, res: Response) => {
    try {
        let payload = {
            lastname: req.body.lastname,
            firstname: req.body.firstname
        }
        const data = await merchantRepository.create({...payload});
        responseSuccess(res, data);
    } catch (err) {
        responseError(res, err);
    }
};

export const getMerchants = async (req: Request, res: Response) => {
    try {
        const data = await merchantRepository.all();
        responseSuccess(res, data);
    } catch (err) {
        responseError(res, err);
    }
};

export const getMerchant = async (req: Request, res: Response) => {
    try {
        let id = req.params.id
        let data: any = await merchantRepository.getById(id);
        let orders: any = await merchantRepository.getMerchantOrders(id);
        data.orders = orders.data;
        responseSuccess(res, data);
    } catch (err) {
        responseError(res, err);
    }
};

export const getMerchantOrders = async (req: Request, res: Response) => {
    try {
        let id = req.params.id
        let data = await merchantRepository.getMerchantOrders(id);
        responseSuccess(res, data);
    } catch (err) {
        responseError(res, err);
    }
};

export const removeMerchant = async (req: Request, res: Response) => {
    try {
        let id = req.params.id;
        const data = await merchantRepository.remove(id)
        responseSuccess(res, data);
    } catch (err) {
        responseError(res, err);
    }
};
