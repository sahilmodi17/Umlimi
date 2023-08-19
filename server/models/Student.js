const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  cpi: {
    type: String,
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },
});

module.exports = mongoose.model("Student", StudentSchema);
