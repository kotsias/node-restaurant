const Category = require("./model");

exports.all = async () => {
    const data = await Category.find();
    return data;
};

exports.get = async id => {
    const data = await Category.findById(id);
    return data;
};

exports.create = async payload => {
    const data = await Category.create(payload);
    return data
};

exports.remove = async id => {
    const data = await Category.findByIdAndRemove(id);
    return data
}