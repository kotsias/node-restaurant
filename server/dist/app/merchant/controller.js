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
import * as merchantRepository from './repository';
export const createMerchant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let payload = {
            lastname: req.body.lastname,
            firstname: req.body.firstname
        };
        const data = yield merchantRepository.create(Object.assign({}, payload));
        responseSuccess(res, data);
    }
    catch (err) {
        responseError(res, err);
    }
});
export const getMerchants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield merchantRepository.all();
        responseSuccess(res, data);
    }
    catch (err) {
        responseError(res, err);
    }
});
export const getMerchant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        let data = yield merchantRepository.getById(id);
        responseSuccess(res, data);
    }
    catch (err) {
        responseError(res, err);
    }
});
export const getMerchantOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        let data = yield merchantRepository.getMerchantOrders(id);
        responseSuccess(res, data);
    }
    catch (err) {
        responseError(res, err);
    }
});
export const removeMerchant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        const data = yield merchantRepository.remove(id);
        responseSuccess(res, data);
    }
    catch (err) {
        responseError(res, err);
    }
});
