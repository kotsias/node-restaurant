import mongoose, { Types } from "mongoose";
const Schema = mongoose.Schema;

export interface ICartItem {
    productId: Types.ObjectId;
    quantity: number;
    price: number;
    total: number;
}

export interface ICart {
    createdAt: Date;
    items: Array<ICartItem>;
    subTotal: number;
    merchantId: Types.ObjectId;
}

export const ItemSchema = new Schema<ICartItem>({
    productId: {
        type: Schema.Types.ObjectId,
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

export const cartSchema = new Schema<ICart>({
    createdAt: {
        type: Date, 
        default: Date.now
    },
    //   creator: { 
    //     type: Schema.Types.ObjectId, 
    //     ref: 'User', 
    //     required: true
    //   }
    items: [ItemSchema],
    subTotal: {
        default: 0,
        type: Number
    },
    merchantId: {
        type: Schema.Types.ObjectId,
        ref: "Merchant",
   },
}, {
    timestamps: true
})

export const Cart = mongoose.model('Cart', cartSchema);
