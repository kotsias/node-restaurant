const getMerchants = require('./get-merchants');
const getMerchant = require('./get-merchant');
const createMerchant = require('./create-merchant');
const updateMerchant = require('./update-merchant');
const deleteMerchant = require('./delete-merchant');

module.exports = {
    '/merchant':{
        ...getMerchants,
        ...createMerchant
    },
    '/merchant/{id}':{
        ...getMerchant,
        ...updateMerchant,
        ...deleteMerchant
    }
}