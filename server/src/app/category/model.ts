import mongoose, { Types } from "mongoose";
import { IProduct, productSchema } from "../product/model";
const Schema = mongoose.Schema;

export interface ICategory {
    name: string;
    image: string;
    products: Array<IProduct>
}

const propertyIsRequired = '{0} is required.';

const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: [true, propertyIsRequired.replace('{0}', 'Name')],
  },
  image: {
    type: String,
    required: true,
  },
  products:{
    type: [productSchema]
  }
});

export const Category = mongoose.model("Category", categorySchema);
