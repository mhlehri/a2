import { Request, Response } from "express";
import { createOrderService } from "./order.service";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await createOrderService(order);
    res.json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error) {}
};
