const mongoose = require("mongoose");
const propertyIsRequired = '{0} is required.';

const orderSchema = mongoose.Schema({
    createdAt: {
      type: Date, 
      default: Date.now
    },
    cartId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
    }
  });

const merchantSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: [true, propertyIsRequired.replace('{0}', 'Firstname')],
  },
  lastname: {
    type: String,
    required: [true, propertyIsRequired.replace('{0}', 'Lastname')],
  },
  orders: [orderSchema],
});

const Merchant = mongoose.model("Merchant", merchantSchema);

module.exports = Merchant;