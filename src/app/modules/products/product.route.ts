import express from "express";
import {
  createProduct,
  getProduct,
  getProductById,
} from "./product.controller";

const router = express.Router();

router.get("/", getProduct);
router.get("/:productId", getProductById);
router.post("/", createProduct);

export const ProductRoute = router;
