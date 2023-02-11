const getCategories = require('./get-categories');
const getCategory = require('./get-category');
const createCategory = require('./create-category');
const updateCategory = require('./update-category');
const deleteCategory = require('./delete-category');

module.exports = {
    '/category':{
        ...getCategories,
        ...createCategory
    },
    '/category/{id}':{
        ...getCategory,
        ...updateCategory,
        ...deleteCategory
    }
}