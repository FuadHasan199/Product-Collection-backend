import { TOrder } from "./order.interface";
import { Order } from "./order.model";

export const emailExists = async (email: string) => {
  try {
    const count = await Order.countDocuments({ email }).exec();
    return count > 0;
  } catch (error) {
    console.error("Error checking email existence:", error);
    throw error;
  }
};

const createOrder = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};

const getAllOrder = async () => {
  const result = await Order.find();
  return result;
};

const getOrderByEmail = async (email: string) => {
  const result = await Order.find({ email }).exec();
  return result;
};

export const OrderService = {
  createOrder,
  getAllOrder,
  getOrderByEmail,
};
