import { z } from "zod";
 
const TvariantValidationSchema = z.object({
    type: z.string(),
    value: z.string(),
});

const TinventoryValidationSchema = z.object({
    quantity: z.number(),
    inStock: z.boolean(),
});

const productValidationSchema = z.object({
    name: z.string().max(25, { message: "Must be less than 25 character" }),
    description: z.string().min(10, { message: "Must be 10 or more characters long" }),
    price: z.number({
        required_error: "Price is required",
        invalid_type_error: "price must be a number",
      }),
    category: z.string().max(50),
    tags: z.array(z.string()),
    variants: z.array(TvariantValidationSchema),
    inventory: TinventoryValidationSchema,
    


})



export default productValidationSchema;