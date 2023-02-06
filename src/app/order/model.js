const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  createdAt: {
    type: Date, 
    default: Date.now
  },
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
//   creator: { 
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: 'User', 
//     required: true
//   }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;