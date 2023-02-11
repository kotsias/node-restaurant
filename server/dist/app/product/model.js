import mongoose from "mongoose";
const Schema = mongoose.Schema;
const propertyIsRequired = '{0} is required.';
const productSchema = new Schema({
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
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
});
export const Product = mongoose.model("Product", productSchema);
