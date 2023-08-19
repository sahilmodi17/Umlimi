const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  state: {
    type: String,
  },
  city: {
    type: String,
  },
});

module.exports = mongoose.model("Address", AddressSchema);
