import mongoose from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new mongoose.Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [
      {
        type: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
      },
    ],
  },
  inventory: {
    type: {
      quantity: {
        type: Number,
        required: true,
      },
      inStock: {
        type: Boolean,
        required: true,
      },
    },
    required: true,
  },
});

export const ProductModel = mongoose.model("Product", productSchema);
