import { model, Schema } from "mongoose";
import { Tinventory, TProduct, Tvarient } from "./product.interface";

const variantSchema = new Schema<Tvarient>({
    type:{ type: String, required:true},
    value:{ type: String, required: true}
});

const inventorySchema = new Schema<Tinventory>({
    quantity: { type: Number, required: true},
    inStock: { type: Boolean, required: true}
});

const ProductSchema = new Schema<TProduct>({
    name: { type: String, required: true},
    description:{ type: String, required: true},
    price:{ type: Number, required: true},
    category:{ type: String, required: true},
    tags:{ type:[String], required: true},
    variants:{ type:[variantSchema],required: true},
    inventory:{ type: inventorySchema,required: true}

})

export const Product = model<TProduct>("Product",ProductSchema);