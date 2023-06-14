import express from "express";
import { createInvoice } from "../functions/invoices/createInvoice.js";

const invoiceRouter = express.Router();

invoiceRouter.post("/invoices", createInvoice);

export default invoiceRouter;
