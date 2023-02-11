var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { responseError, responseSuccess } from '../responseHandler';
import * as productRepository from './repository';
export const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        let payload = {
            name: req.body.name,
            price: req.body.price,
            image: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path
        };
        let product = yield productRepository.createProduct(Object.assign({}, payload));
        responseSuccess(res, product);
    }
    catch (err) {
        responseError(res, err);
    }
});
export const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currency = req.params.currency;
        let products = yield productRepository.products();
        responseSuccess(res, products);
    }
    catch (err) {
        responseError(res, err);
    }
});
export const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        let productDetails = yield productRepository.productById(id);
        responseSuccess(res, productDetails);
    }
    catch (err) {
        responseError(res, err);
    }
});
export const removeProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        let productDetails = yield productRepository.removeProduct(id);
        responseSuccess(res, productDetails);
    }
    catch (err) {
        responseError(res, err);
    }
});
