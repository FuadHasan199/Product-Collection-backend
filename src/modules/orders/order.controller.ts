import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await OrderService.createOrder(data);
    res.json({
        status: true,
        message: "Order created successfully!",
        data: result,
    })
  } catch (err) {
     res.json({
        status: false,
        message: "Something wrong",
        error: err,
     })
  }
};

const getAllOrder = async(req: Request, res: Response) =>{
    try{
        const result = await OrderService.getAllOrder();
        res.json({
            status: true,
            message: "Orders fetched successfully!",
            data: result,
        }) 
    }catch(err){
        res.json({
            status: false,
            message: "Oops something wrong",
            error: err,
        })
    }
}

export const OrderController = {
    createOrder,
    getAllOrder,
}
