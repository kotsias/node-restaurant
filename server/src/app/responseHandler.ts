import { Response } from 'express';

export interface IResponseWrapper<T> {
    type: 'Success' | 'Error' | 'Bad Request';
    status: boolean;
    message: string;
    data: T;
};

export const responseSuccess = (res: Response, data: any, message: string = 'Success') => {
    res.status(200).json({
        type: 'Success',
        status: true,
        message: message,
        data: data,
    });
};

export const responseError = (res: Response, err: any, message = 'Error') => {
    console.log(err);
    res.status(500).json({
        type: 'Error',
        status: false,
        error: err,
        message: message,
    });
};

export const responseBadRequest = (res: Response, err: any, message: string = 'Bad Request') => {
    console.log(err);
    res.status(400).json({
        type: 'Bad Request',
        status: false,
        error: err,
        message: message
    });
};