import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const searchProducts = async(searchTerm: string) =>{
    try {
        const regex = new RegExp(searchTerm, 'i'); 
        const result = await Product.find({
            $or: [
                { name: regex },
                { description: regex },
                { category: regex },
                { tags: regex }
            ]
        }).exec();
        return result;
    } catch (error) {
        console.error('Error searching products:', error);
        throw error;
    }
}

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

const deleteProduct = async(_id: string) =>{ 
    const result = await Product.deleteOne({_id}); 
    return result; 
}

const getProductBySlug = async(slug: string) =>{
    const result = await Product.findOne({slug})
    return result;
}

export const ProductServices = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    getProductBySlug,
    deleteProduct,
    searchProducts,
}