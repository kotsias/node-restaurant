const basicApiInfo = require('./basicApiInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const product = require('./product');
const category = require('./category');
const merchant = require('./merchant');
const order = require('./order');

module.exports = {
    ...basicApiInfo,
    ...servers,
    ...components,
    ...tags,
    paths: {
        ...product,
        ...category,
        ...merchant,
        ...order
    }
};