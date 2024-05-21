import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

export const getProductByIdService = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

export const getProductService = async () => {
  const result = await ProductModel.find();
  return result;
};

export const createProductService = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};
