import { Invoice } from "../../schemas/invoice.js";

const createInvoice = async (req, res, next) => {
  try {
    // Retrieve the necessary data from the request body
    const { invoiceNumber, customer, items, totalAmount } = req.body;

    // Create a new Invoice instance using the Invoice schema
    const newInvoice = new Invoice({
      invoiceNumber,
      customer,
      items,
      totalAmount,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    });

    // Save the new invoice to the database
    const savedInvoice = await newInvoice.save();

    res.json(savedInvoice); // Return the created invoice
  } catch (error) {
    next(error);
  } finally {
    // Disconnect from MongoDB
    console.log("Disconnected from database");
  }
};

export { createInvoice };
