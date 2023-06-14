import { Product } from "../../schemas/product.js";

const findProduct = async (req, res, next) => {
  try {
    const { name, category } = req.query;

    const query = {
      $or: [
        { name: { $regex: new RegExp(name, "i") } },
        { category: { $regex: new RegExp(category, "i") } }
      ],
      status: "active"
    };

    const products = await Product.find(query);

    res.json(products);
  } catch (error) {
    next(error);
  }
};

export { findProduct };
