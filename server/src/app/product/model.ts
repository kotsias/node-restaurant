import mongoose, { Types } from "mongoose";
const Schema = mongoose.Schema;

export interface IProduct {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: string;
    categoryId: Types.ObjectId;
}

const propertyIsRequired = '{0} is required.';

export const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, propertyIsRequired.replace('{0}', 'Name')],
  },
  description: {
    type: Schema.Types.String
  },
//   price: {
//     type: String,
//     required: [true, propertyIsRequired.replace('{0}', 'Price')],
//   },
  price: {
    type: Schema.Types.Number,
    min: 0,
    max: Number.MAX_VALUE,
    default: 0
  },
  currency: {
    type: String,
    required: true,
  }, 
  image: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
});

export const Product = mongoose.model("Product", productSchema);
