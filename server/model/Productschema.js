const mongoose = require("mongoose");

const productschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    des: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    catagory: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
    color: [],
    image1: {
      type: String,
    },
    image2: {
      type: String,
    },
    tags: String,
    rating: [
      {
        start: Number,
        comment: String,
        postby: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "user",
        },
      },
    ],
    totalrating: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = new mongoose.model("Products", productschema);

module.exports = Product;
