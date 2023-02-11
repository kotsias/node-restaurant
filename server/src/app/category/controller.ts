import { Request, Response } from 'express';
import { responseSuccess, responseError } from '../responseHandler';
import * as categoryRepository from './repository';

export const createCategory = async (req: Request, res: Response) => {
    try {
        let payload = {
            name: req.body.name
        }
        let data = await categoryRepository.create({
            ...payload
        });
        responseSuccess(res, data);
    } catch (err) {
        responseError(res, err);
    }
}
export const getAllCategories = async (req: Request, res: Response) => {
    try {
        let data = await categoryRepository.all();
        responseSuccess(res, data);
    } catch (err) {
        responseError(res, err);
    }
}

export const getCategoryById = async (req: Request, res: Response) => {
    try {
        let id = req.params.id
        let data = await categoryRepository.get(id);
        responseSuccess(res, data);
    } catch (err) {
        responseError(res, err);
    }
}

export const removeCategory = async (req: Request, res: Response) => {
    try {
        let id = req.params.id
        let data = await categoryRepository.remove(id)
        responseSuccess(res, data);
    } catch (err) {
        responseError(res, err);
    }
}
