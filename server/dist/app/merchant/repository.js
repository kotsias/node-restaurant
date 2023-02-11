var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Cart } from '../cart/model';
import { Merchant } from './model';
export const all = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = Merchant.find();
    return res;
});
export const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = Merchant.findById(id).populate({
        path: "orders",
        select: "createdAt"
    }).exec();
    return data;
});
export const getMerchantOrders = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = Cart.findById({ merchantId: id }).populate({
        path: "items.productId",
        select: "name image"
    }).exec();
    return data;
});
export const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Merchant.create(payload);
    return res;
});
export const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = Merchant.findByIdAndRemove(id);
    return res;
});
