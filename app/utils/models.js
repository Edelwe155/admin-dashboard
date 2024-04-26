import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 3,
      max: 18,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "guest",
    },
    status: {
      type: String,
      default: "active",
    },
    nonessentials: {
      name: {
        type: String,
      },
      image: {
        type: String,
      },
      phone: {
        type: String,
      },
      address: {
        type: String,
      },
      about: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
    about: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
