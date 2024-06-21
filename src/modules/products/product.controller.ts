import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async(req:Request, res:Response)=>{
    try{
        const data = req.body;
    const result = await ProductServices.createProduct(data)
    res.json({
        success:true,
        message:'Product created successfully!',
        data:result
    });
    }catch(err:any){
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
    }catch(err: any){
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
}