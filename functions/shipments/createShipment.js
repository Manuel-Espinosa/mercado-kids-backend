import { Shipment } from "../../schemas/shipment.js";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const APIKEY = process.env.ENVIAME_API_KEY;
const URL = process.env.ENVIAME_URL;

const createShipment = async (req, res, next) => {
  try {
    const options = {
      method: "POST",
      url: URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": APIKEY,
      },
      data: req.body,
    };

    const response = await axios.request(options);
    const shipmentData = response.data;

    // Create a new Shipment document using the shipment schema
    const shipment = new Shipment(shipmentData);
    await shipment.save();

    res.json(shipment);
  } catch (error) {
    next(error);
  }
};

export { createShipment };
