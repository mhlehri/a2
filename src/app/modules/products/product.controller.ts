import { Request, Response } from "express";
import {
  createProductService,
  getProductService,
  getProductByIdService,
  updateProductByIdService,
  deleteProductByIdService,
} from "./product.service";
import { productValidationSchema } from "./product.validation";

export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await getProductByIdService(id);
    res.status(200).send({
      success: true,
      message: "Single Product fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query?.searchTerm;
    const result = await getProductService(searchTerm as string);
    res.status(200).send({
      success: true,
      message: "Product fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const value = productValidationSchema.parse(product);
    const result = await createProductService(value);
    res.send({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const updateProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const product = req.body;
    const value = productValidationSchema.parse(product);
    await updateProductByIdService(id, value);
    res.send({
      success: true,
      message: "Product updated successfully!",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};

export const deleteProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await deleteProductByIdService(id);
    console.log(result);
    res.json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};
