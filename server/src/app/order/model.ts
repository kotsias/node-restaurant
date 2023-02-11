// import mongoose, { Types } from "mongoose";
// const Schema = mongoose.Schema;

// export interface IOrder {
//     createdAt: Date;
//     merchantId: Types.ObjectId;
//     cartId: Types.ObjectId;
// }

// const orderSchema = new Schema<IOrder>({
//   createdAt: {
//     type: Date, 
//     default: Date.now
//   },
//   merchantId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Merchant",
//   },
//   cartId: {
//     type: Schema.Types.ObjectId,
//     ref: "Cart",
//   },
// //   creator: { 
// //     type: Schema.Types.ObjectId, 
// //     ref: 'User', 
// //     required: true
// //   }
// });

// export const Order = mongoose.model("Order", orderSchema);
