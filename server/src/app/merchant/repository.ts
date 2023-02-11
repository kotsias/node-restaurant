import { Cart } from '../cart/model';
import { Merchant } from './model';
import { ObjectId } from 'mongodb';

export const all = async () => {
    const res = Merchant.find();
    return res;
};

export const getById = async (id: string) => {
    const data = Merchant.findById(id).populate({
        path: "Cart",
        select: "createdAt"
    }).exec();
    return data;
}

export const getMerchantOrders = async (Id: string) => {
    const mId = new ObjectId(Id);
    const data = Cart.findOne({merchantId: mId}).populate({
        path: "items.productId",
        select: "name price image"
    }).exec();
    return data;
};

export const create = async (payload: any) => {
    const res = await Merchant.create(payload);
    return res;
};

export const remove = async (id: string) => {
    const res = Merchant.findByIdAndRemove(id);
    return res;
};