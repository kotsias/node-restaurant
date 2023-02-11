import mongoose from "mongoose";
const Schema = mongoose.Schema;
const propertyIsRequired = '{0} is required.';
const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, propertyIsRequired.replace('{0}', 'Name')],
    },
    image: {
        type: String,
        required: true,
    }
});
export const Category = mongoose.model("Category", categorySchema);
