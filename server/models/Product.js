const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide first product name'],
    trim: true,
    minlength: 1,
  },

  price: {
    type: String,
    required: [true, 'Please provide first product price'],
  },

  qty: {
    type: Number,
    required: [true, 'Please Enter the qty'],
  },

  description: {
    type: String,
    minlength: 5,
    required: [true, 'Please provide product description'],
  },

  outOfStock: {
    type: Boolean,
    required: [true, 'Please mention product is in stock or not'],
  },

  image1: {
    type: String,
  },
  // image2: {
  //   type: String,
  // },
  // image3: {
  //   type: String,
  // },

  category: {
    type: String,
    minlength: 3,
    required: [true, 'Please provide product category'],
  },
})

module.exports = mongoose.model('Product', ProductSchema)
