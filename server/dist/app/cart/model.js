import mongoose from "mongoose";
const Schema = mongoose.Schema;
export const ItemSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.']
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});
export const cartSchema = new Schema({
    items: [ItemSchema],
    subTotal: {
        default: 0,
        type: Number
    },
    merchantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Merchant",
    },
}, {
    timestamps: true
});
export const Cart = mongoose.model('cart', cartSchema);
