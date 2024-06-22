"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const TvariantValidationSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string(),
});
const TinventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z.number(),
    inStock: zod_1.z.boolean(),
});
const productValidationSchema = zod_1.z.object({
    name: zod_1.z.string().max(25, { message: "Must be less than 25 character" }),
    description: zod_1.z.string().min(10, { message: "Must be 10 or more characters long" }),
    price: zod_1.z.number({
        required_error: "Price is required",
        invalid_type_error: "price must be a number",
    }),
    category: zod_1.z.string().max(50),
    tags: zod_1.z.array(zod_1.z.string()),
    variants: zod_1.z.array(TvariantValidationSchema),
    inventory: TinventoryValidationSchema,
});
exports.default = productValidationSchema;
