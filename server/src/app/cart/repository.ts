import { Cart } from './model';
import { ObjectId } from 'mongodb';

export const cart = async (merchantId: string) => {
    const mId = new ObjectId(merchantId);
    const cart: any = await Cart.findOne({ merchantId: mId }).populate({
        path: "items.productId",
        //select: "name price total"
        select: "name image"
    }).sort({ createdAt: 'desc' }).exec();
    return cart;
};

// export const create = async (payload: any) => {
//     const cart = await Cart.create(payload);
//     return cart;
// }

export const addItem = async (payload: any) => {
    const newItem = await Cart.create(payload);
    return newItem;
}
