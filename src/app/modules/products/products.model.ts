const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Product", productSchema);
