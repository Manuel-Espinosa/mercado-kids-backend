import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  sku: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  dimensions: {
    height: {
      type: Number,
      required: true
    },
    length: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    }
  },
  weight: {
    type: Number,
    required: true
  },
  inventory: {
    type: Number,
    required: true
  },
  images: {
    type: [String],
    default: []
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: {
    type: Date,
    default: null
  }
});

const Product = mongoose.model("Product", productSchema);

export { Product };
