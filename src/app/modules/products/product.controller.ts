import { Request, Response } from "express";
import {
  createProductService,
  getProductService,
  getProductByIdService,
  updateProductByIdService,
} from "./product.service";
import { studentValidationSchema } from "./product.validation";

export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await getProductByIdService(id);
    res.send({
      success: true,
      message: "Single Product fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Product fetched failed" });
  }
};
//? get Product function is responsible for fetching all products. It calls the getProductService function to fetch all products. If the operation is successful, it returns a success response with status code 200 and a message indicating that the products were fetched successfully. If the operation fails, it returns an error response with status code 500 and a message indicating that the products were not fetched successfully.

export const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await getProductService();
    res.send({
      success: true,
      message: "Product fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Product fetched failed" });
  }
};

//? The createProduct function is responsible for creating a new product. It receives the request and response objects as parameters. It first validates the request body using the studentValidationSchema. If the validation is successful, it calls the createProductService function to create the product. If the validation fails, it returns an error response with status code 500 and a message indicating that the data is invalid.

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const value = studentValidationSchema.parse(product);
    const result = await createProductService(value);
    res.send({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed product insertion" });
  }
};

export const updateProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const product = req.body;
    const value = studentValidationSchema.parse(product);
    const result = await updateProductByIdService(id, value);
    res.send({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed product insertion" });
  }
};
