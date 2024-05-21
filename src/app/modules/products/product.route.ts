import express from "express";
import {
  createProduct,
  getProduct,
  getProductById,
  updateProductById,
} from "./product.controller";

const router = express.Router();

router.get("/", getProduct);
router.get("/:productId", getProductById);
router.post("/", createProduct);
router.put("/:productId", updateProductById);

export const ProductRoute = router;
