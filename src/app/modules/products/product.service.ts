import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

export const getProductByIdService = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

export const getProductService = async (searchTerm: string) => {
  // filter by search term and return products. if there is no search term, it will return all products
  const filter = {};
  if (searchTerm) {
    filter.$or = [
      { name: { $regex: searchTerm, $options: "i" } },
      { description: { $regex: searchTerm, $options: "i" } },
      { tags: { $regex: searchTerm, $options: "i" } },
      { category: { $regex: searchTerm, $options: "i" } },
    ];
  }
  const result = await ProductModel.find(filter);
  return result;
};

export const createProductService = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

export const updateProductByIdService = async (
  id: string,
  product: IProduct
) => {
  const result = await ProductModel.findOneAndUpdate({ _id: id }, product);
  return result;
};
export const deleteProductByIdService = async (id: string) => {
  const result = await ProductModel.findOneAndDelete({ _id: id });
  return result;
};
