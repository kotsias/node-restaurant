import { Product } from './model';

export const products = async () => {
    const products = Product.find();
    return products;
};

export const productById = async (id: string) => {
    const product = Product.findById(id);
    return product;
};

export const createProduct = async (payload: any) => {
    const newProduct = await Product.create(payload);
    return newProduct
};

export const removeProduct = async (id: string) => {
    const product = Product.findByIdAndRemove(id);
    return product
}
