import { Product } from "../product/model";
import { Category } from "./model";
import { ObjectId } from 'mongodb';

export const all = async () => {
    const data = Category.find();
    return data;
};

export const get = async (id: any) => {
    const cId = new ObjectId(id);
    let data: any = await Category.findById(id).exec();
    const products = await Product.find({ categoryId: cId}).exec();
    data.products = products;
    return data;
};

export const create = async (payload: any) => {
    const data = await Category.create(payload);
    return data
};

export const remove = async (id: string) => {
    const data = Category.findByIdAndRemove(id);
    return data
};
