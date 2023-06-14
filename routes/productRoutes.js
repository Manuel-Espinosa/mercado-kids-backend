import express from "express";
import { createProduct } from "../functions/products/createProduct.js";
import { findProduct } from "../functions/products/findProduct.js";
import { getAllProducts } from "../functions/products/getAllProducts.js";
const productRouter = express.Router();

productRouter.post("/products", createProduct);
productRouter.get("/products", findProduct)
productRouter.get("/products", getAllProducts)
export default productRouter;