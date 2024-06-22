import { TProduct } from "./product.interface";
import { Product } from "./product.model";


const createProduct = async(payLoad:TProduct) =>{
    const result = await Product.create(payLoad);
    return result;
}

const getAllProduct = async() =>{
    const result = await Product.find();
    return result;
}

const getSingleProduct = async(_id: string) =>{
    const result = await Product.findOne({_id}) 
    return result; 
}

export const ProductServices = {
    createProduct,
    getAllProduct,
    getSingleProduct,
}