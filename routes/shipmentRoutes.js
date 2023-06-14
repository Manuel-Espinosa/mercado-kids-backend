import express from "express";
import { createShipment } from "../functions/shipments/createShipment.js";

const shipmentRouter = express.Router();

shipmentRouter.post("/shipments", createShipment);

export default shipmentRouter;