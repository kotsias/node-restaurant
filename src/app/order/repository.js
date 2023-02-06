const Order = require("./model");

exports.all = async () => {
    const res = await Order.find();
    return res;
};

exports.create = async payload => {
    payload.createdAt = Date.now();
    const res = await Order.create(payload);
    return res;
};

exports.remove = async id => {
    const res = await Order.findByIdAndRemove(id);
    return res;
};