var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Cart } from './model';
import { ObjectId } from 'mongodb';
export const cart = (merchantId) => __awaiter(void 0, void 0, void 0, function* () {
    const mId = new ObjectId(merchantId);
    const cart = yield Cart.findOne({ merchantId: mId }).populate({
        path: "items.productId",
        //select: "name price total"
        select: "name image"
    }).sort({ createdAt: 'desc' }).exec();
    return cart;
});
// export const create = async (payload: any) => {
//     const cart = await Cart.create(payload);
//     return cart;
// }
export const addItem = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newItem = yield Cart.create(payload);
    return newItem;
});
