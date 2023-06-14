import { Product } from "../../schemas/product.js";

const getAllProducts = async (req, res, next) => {
  try {
    // Retrieve all active products from the database
    const products = await Product.find({ status: "active" });

    res.json(products); // Return the active products
  } catch (error) {
    next(error);
  }
};

export { getAllProducts };
