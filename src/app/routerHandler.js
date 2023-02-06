const categoryRoutes = require("./category/routes");
const productRoutes = require("./product/routes");
const cartRoutes = require('./cart/routes');
const orderRoutes = require('./order/routes');
const merchantRoutes = require('./merchant/routes');

module.exports = app => {
    app.use("/category", categoryRoutes);
    app.use("/product", productRoutes);
    app.use("/cart", cartRoutes);
    app.use("/order", orderRoutes);
    app.use("/merchant", merchantRoutes);
}
