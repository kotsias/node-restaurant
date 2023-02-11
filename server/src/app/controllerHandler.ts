const categoryController = require('./category/controller')
const productController = require('./product/controller')
const cartController = require('./cart/controller')
const orderController = require('./order/controller')
const merchantController = require('./merchant/controller')

module.exports = {
  category: categoryController,
  product: productController,
  cart: cartController,
  order: orderController,
  mechant: merchantController
}
