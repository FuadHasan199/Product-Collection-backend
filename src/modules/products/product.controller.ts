import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidationSchema from "./product.validation";

const createProduct = async(req:Request, res:Response)=>{
    try{
        const data = req.body;
        const zodParsedData = productValidationSchema.parse(data);
    const result = await ProductServices.createProduct(zodParsedData);
    res.json({
        success:true,
        message:'Product created successfully!',
        data:result
    });
    }catch(err){
        res.json({
            success:false,
            message: "something wrong!",
            error: err
        })
    }
}

const getAllProduct = async(req:Request, res:Response)=>{
    try{
        const result = await ProductServices.getAllProduct();
        res.json({
           success: true,
           message: "All product fetched successfully",
           data: result
        })
    }catch(err){
        res.json({
            success:false,
            message: "could not fetch product",
            error: err
        })
    }
    
}
const getSingleProduct = async(req:Request, res:Response)=>{
    try{
        const { productId } = req.params;
        const result = await ProductServices.getSingleProduct(productId);
        res.json({
           success: true,
           message: "Product fetched successfully",
           data: result
        })
    }catch(err){
        res.json({
            success:false,
            message: "could not fetch product",
            error: err
        })
    }
    
}
const deleteProduct = async(req:Request, res:Response)=>{
    try{
        const { productId } = req.params;
         await ProductServices.deleteProduct(productId);
        res.json({
           success: true,
           message: "Product deleted successfully!",
           data: null
        })
    }catch(err){
        res.json({
            success:false,
            message: "something wrong",
            error: err
        })
    }
    
}

const getProductBySlug = async(req:Request, res:Response) =>{
   try{
    const { slug } = req.params;
    const result = await ProductServices.getProductBySlug(slug);
    res.json({
        success: true,
        message: "Product fetched successfully",
        data: result
     })
   }catch(err){
    res.json({
        success:false,
        message: "could not fetch product",
        error: err
    })
   }
}

export const ProductController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    getProductBySlug,
    deleteProduct,
}