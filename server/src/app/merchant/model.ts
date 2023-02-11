import mongoose, { Types } from "mongoose";
import { cartSchema, ICart } from "../cart/model";
const Schema = mongoose.Schema;

// export interface IOrder {
//     createdAt: Date;
//     cartId: Types.ObjectId;
// }

export interface IMerchant {
    firstname: string;
    lastname: string;
    orders: Array<ICart>;
}

const propertyIsRequired = '{0} is required.';

// const orderSchema = new Schema<IOrder>({
//     createdAt: {
//       type: Date, 
//       default: Date.now
//     },
//     cartId: {
//       type: Schema.Types.ObjectId,
//       ref: "Cart",
//     }
//   });

const merchantSchema = new Schema<IMerchant>({
  firstname: {
    type: String,
    required: [true, propertyIsRequired.replace('{0}', 'Firstname')],
  },
  lastname: {
    type: String,
    required: [true, propertyIsRequired.replace('{0}', 'Lastname')],
  },
  orders: [cartSchema],
});

export const Merchant = mongoose.model("Merchant", merchantSchema);
