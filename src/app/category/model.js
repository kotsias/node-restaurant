const mongoose = require("mongoose");
const propertyIsRequired = '{0} is required.';

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, propertyIsRequired.replace('{0}', 'Name')],
  }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;