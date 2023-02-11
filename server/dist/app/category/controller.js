var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { responseSuccess, responseError } from '../responseHandler';
import * as categoryRepository from './repository';
export const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let payload = {
            name: req.body.name
        };
        let data = yield categoryRepository.create(Object.assign({}, payload));
        responseSuccess(res, data);
    }
    catch (err) {
        responseError(res, err);
    }
});
export const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield categoryRepository.all();
        responseSuccess(res, data);
    }
    catch (err) {
        responseError(res, err);
    }
});
export const getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        let data = yield categoryRepository.get(id);
        responseSuccess(res, data);
    }
    catch (err) {
        responseError(res, err);
    }
});
export const removeCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        let data = yield categoryRepository.remove(id);
        responseSuccess(res, data);
    }
    catch (err) {
        responseError(res, err);
    }
});
