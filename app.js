import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoutes.js";
import productRouter from './routes/productRoutes.js'
import invoiceRouter from './routes/invoiceRoutes.js'
import shipmentRouter from "./routes/shipmentRoutes.js";
import { connectionPool } from "./conn.js";

const PORT = 5000;
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Wait for the database connection to be established
connectionPool.once("open", () => {
  // Set up the routes
  app.use(userRouter);
  app.use(productRouter)
  app.use(invoiceRouter)
  app.use(shipmentRouter)

  // Start the server
  app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
  });
});

connectionPool.on("error", (err) => {
  console.error("Failed to connect to the database", err);
  process.exit(1);
});
