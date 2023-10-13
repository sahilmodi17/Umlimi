const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide the user ID"],
  },

  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Please provide the product ID"],
      },
      qty: {
        type: Number,
        required: [true, "Please Enter the qty"],
      },
    },
  ],

  orderDate: {
    type: Date,
    default: Date.now,
  },

  // Add other fields if needed
});

module.exports = mongoose.model("Order", OrderSchema);
