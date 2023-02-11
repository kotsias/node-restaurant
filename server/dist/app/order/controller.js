"use strict";
// import { Request, Response } from 'express';
// import { responseError, responseSuccess } from '../responseHandler';
// import * as orderRepository from './repository';
// export const createOrder = async (req: Request, res: Response) => {
//     try {
//         const { carttId } = req.body;
//         const order = await orderRepository.create(carttId);
//         responseSuccess(res, order);
//     } catch (err) {
//         responseError(res, err);
//     }
// };
// export const getOrders = async (req: Request, res: Response) => {
//     try {
//         const orders = await orderRepository.all();
//         responseSuccess(res, orders);
//     } catch (err) {
//         responseError(res, err);
//     }
// };
// export const removeOrder = async (req: Request, res: Response) => {
//     try {
//         let id = req.params.id;
//         const orderDetails = await orderRepository.remove(id)
//         responseSuccess(res, orderDetails);
//     } catch (err) {
//         responseError(res, err);
//     }
// }
