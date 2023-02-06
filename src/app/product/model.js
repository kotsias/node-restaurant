const mongoose = require("mongoose");
const propertyIsRequired = '{0} is required.';

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, propertyIsRequired.replace('{0}', 'Name')],
  },
  description: {
    type: mongoose.Schema.Types.String
  },
//   price: {
//     type: String,
//     required: [true, propertyIsRequired.replace('{0}', 'Price')],
//   },
  price: {
    type: mongoose.Schema.Types.Number,
    min: 0,
    max: Number.MAX_VALUE,
    default: 0
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    red: 'Category'
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;