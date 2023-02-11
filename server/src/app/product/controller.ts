import { Request, Response } from 'express';
import { Delete, Get, Post } from 'tsoa';
import { IResponseWrapper, responseError, responseSuccess } from '../responseHandler';
import { IProduct } from './model';
import * as productRepository from './repository';

export default class ProductController {

    @Post("/")
    public async createProduct(req: Request, res: Response): Promise<any> {
        try {
            let payload = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                currency: req.body.currency,
                categoryId: req.body.categoryId,
                image: req.file?.path
            }
            let product = await productRepository.createProduct({
                ...payload
            });
            return responseSuccess(res, product);
        } catch (err) {
            return responseError(res, err);
        }
    };
    
    @Get("/")
    public async getProducts(req: Request, res: Response): Promise<any> {
        try {
            const currency = req.params.currency;
            let products = await productRepository.products();
            responseSuccess(res, products);
        } catch (err) {
            responseError(res, err);
        }
    };
    
    @Get("/:id")
    public async getProductById(req: Request, res: Response): Promise<any> {
        try {
            let id = req.params.id
            let productDetails = await productRepository.productById(id);
            responseSuccess(res, productDetails);
        } catch (err) {
            responseError(res, err);
        }
    };
    
    @Delete("/")
    public async removeProduct(req: Request, res: Response): Promise<any> {
        try {
            let id = req.params.id
            let productDetails = await productRepository.removeProduct(id)
            responseSuccess(res, productDetails);
        } catch (err) {
            responseError(res, err);
        }
    };

}
