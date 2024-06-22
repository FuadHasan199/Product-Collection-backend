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
    });
  } catch (err) {
    res.json({
      status: false,
      message: "Something wrong",
      error: err,
    });
  }
};

const getAllOrderOrEmailBy = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    if (email === undefined) {
      const result = await OrderService.getAllOrder();

      res.json({
        status: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    } 
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: "Invalid email format",
        });
      } 
      else if(emailRegex.test(email)){
        const exists = await OrderService.emailExists(email)
        if(!exists) {
            return res.json({
                success: false,
                message: 'Email not found in the database'
            });
        }
      }
      
        const result = await OrderService.getOrderByEmail(email);
        res.json({
          status: true,
          message: "Orders fetched successfully for user email!",
          data: result,
        });
      
    }
  } catch (err) {
    res.json({
      status: false,
      message: "Oops something wrong",
      error: err,
    });
  }
};


export const OrderController = {
  createOrder,
  getAllOrderOrEmailBy,
  
};
