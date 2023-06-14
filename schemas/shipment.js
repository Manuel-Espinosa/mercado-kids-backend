import mongoose from "mongoose";

const { Schema } = mongoose;

const shipmentSchema = new Schema({
  data: {
    identifier: {
      type: Number,
      required: true,
    },
    imported_id: {
      type: String,
      required: true,
    },
    tracking_number: {
      type: String,
      required: true,
    },
    status: {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      code: {
        type: String,
        required: true,
      },
      info: {
        type: String,
        required: true,
      },
      created_at: {
        type: Date,
        required: true,
      },
    },
    customer: {
      full_name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    shipping_address: {
      full_address: {
        type: String,
        required: true,
      },
      place: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
    },
    country: {
      type: String,
      required: true,
    },
    carrier: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    label: {
      PDF: {
        type: String,
        required: true,
      },
      ZPL: String,
      PNG: String,
    },
    barcodes: {
      type: String,
      required: true,
    },
    deadline_at: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      required: true,
    },
    updated_at: {
      type: Date,
      required: true,
    },
    links: [
      {
        rel: {
          type: String,
          required: true,
        },
        href: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

const Shipment = mongoose.model("Shipment", shipmentSchema);

export { Shipment };
