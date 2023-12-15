const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  qty: {
    type: Number,
    default: 1,
  },
});

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide first name"],
    trim: true,
    minlength: 3,
  },

  lastName: {
    type: String,
    required: [true, "please provide last name"],
    trim: true,
    minlength: 3,
  },

  email: {
    type: String,
    unique: true,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/,
      "Please provide a valid email",
    ],
  },

  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
  },

  address: {
    type: String,
    trim: true,
    minlength: 3,
  },

  city: {
    type: String,
    trim: true,
    minlength: 3,
  },

  state: {
    type: String,
    trim: true,
    minlength: 3,
  },

  cartData: [cartItemSchema],
});

UserSchema.pre("save", async function () {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

UserSchema.methods.createToken = function () {
  return jwt.sign(
    { userId: this._id, email: this.email },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

module.exports = mongoose.model("User", UserSchema);
