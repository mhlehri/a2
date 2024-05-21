import { IOder } from "./order.interface";
import { OrderModel } from "./order.model";

export const createOrderService = async (order: IOder) => {
  const result = await OrderModel.create(order);
  return result;
};
