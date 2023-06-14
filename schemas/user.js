import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  father: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    rfc: {
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
    address: {
      street: String,
      neighbourhood: String,
      zip: String,
    },
    child: {
      name: String,
      birthdate: Date,
      phone: String,
      avatar: String,
    },
    password: {
      type: String,
      required: true,
    },
    bankaccount: {
      numbercard: String,
      expdate: String,
      ccv: String,
    },
    status: {
      type: String,
      default: "active",
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
});

const User = mongoose.model("User", userSchema);

export {User}
