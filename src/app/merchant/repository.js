const Merchant = require("./model");

exports.all = async () => {
    const res = await Merchant.find();
    return res;
};

exports.getById = async id => {
    const data = await Merchant.findById(id);
    return data;
}

exports.create = async payload => {
    const res = await Merchant.create(payload);
    return res;
};

exports.remove = async id => {
    const res = await Merchant.findByIdAndRemove(id);
    return res;
};