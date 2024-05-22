import { ProductModel } from "../products/product.model";
import { IOder } from "./oder.interface";
import { OrderModel } from "./order.model";

export const getOrderService = async (email: string) => {
  // retrieve order by email. if email is not provided, it will return all orders
  const emailQuery = email ? { email } : {};

  const result = await OrderModel.find(emailQuery);
  if (result.length > 0) {
    return result;
  }
  throw new Error("Order not found");
};

export const createOrderService = async (order: IOder) => {
  const id = order.productId;
  const isExist = await ProductModel.findById(id);
  if (!isExist) {
    throw new Error("Product not found!");
  } else {
    const updatedQuantity = isExist?.inventory?.quantity - order?.quantity;

    if (
      isExist.inventory.inStock &&
      updatedQuantity >= 0 &&
      updatedQuantity <= isExist?.inventory?.quantity
    ) {
      const result = await OrderModel.create(order);

      await ProductModel.updateOne(
        { _id: id },
        {
          "inventory.quantity": updatedQuantity,
          "inventory.inStock": updatedQuantity > 0,
        }
      );
      return result;
    } else {
      throw new Error("Insufficient quantity available in inventory");
    }
  }
};
