import { ProductModel } from "../products/product.model";
import { IOder } from "./order.interface";
import { OrderModel } from "./order.model";

export const getOrderService = async () => {
  const result = await OrderModel.find();
  return result;
};

export const createOrderService = async (order: IOder) => {
  const id = order.productId;
  const isExist = await ProductModel.findById(id);
  if (!isExist) {
    throw new Error("Product not found!");
  } else {
    const updatedQuantity = isExist?.inventory?.quantity - order?.quantity;

    if (isExist.inventory.inStock && updatedQuantity >= 0) {
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
