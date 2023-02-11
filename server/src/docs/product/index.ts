const getProducts = require('./get-products');
const getProduct = require('./get-product');
const createProduct = require('./create-product');
const updateProduct = require('./update-product');
const deleteProduct = require('./delete-product');

module.exports = {
    '/product':{
        ...getProducts,
        ...createProduct
    },
    '/product/{id}':{
        ...getProduct,
        ...updateProduct,
        ...deleteProduct
    }
}