import { Product } from "../../schemas/product.js";

const createProduct = async (req, res, next) => {
  try {

    // Take the values for each key from the request body
    const { sku, name, category, brand, description, status, dimensions, weight, inventory, images } = req.body;

    // Create a new Product instance using the Product schema
    const createdProduct = new Product({
      sku,
      name,
      category,
      brand,
      description,
      status,
      dimensions,
      weight,
      inventory,
      images
    });

    // Wait until the save() operation finishes to insert the new product
    const result = await createdProduct.save();
    res.json(result); // Return the created product
  } catch (error) {
    next(error);
  } finally {
    // Disconnect from MongoDB
    console.log("Created");
  }
};

export { createProduct };
