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

export const OrderController = {
    createOrder,
}
