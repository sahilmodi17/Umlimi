const Product = require("../models/Product");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "drt8zrvjx",
  api_key: "651992168492543",
  api_secret: "12wbhtfrPtU6AHlvoipsmLIdh8E",
});
const addProduct = async (req, res) => {
  const { name, price, qty, description, category } = req.body;
  const file = req.files.image1;

  // console.log(req.files);
  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(file.tempFilePath);
    const image1 = result.url;

    const tempData = {
      name,
      price,
      qty,
      description,
      category,
      outOfStock: false,
      image1,
    };

    // Create product with image URL
    const product = await Product.create(tempData);

    return res.status(200).json({ msg: "Data entered", product });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ err: "Error uploading image or creating product" });
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.productId;
  const data = req.body;

  try {
    const updateProduct = await Product.findOneAndUpdate(
      { _id: productId },
      data,
      {
        new: true,
        runValidator: true,
      }
    );
    if (!updateProduct) {
      throw `no porduct with id ${productId}`;
    } else {
      return res.status(200).json({ updateProduct });
    }
  } catch (error) {
    return res.status(500).json({
      err: error,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.send({ products });
  } catch (error) {
    return res.status(500).json({
      err: error,
    });
  }
};

const getProductCategorywise = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });

    if (!products) {
      throw "invalid category";
    }
    res.send({ products });
  } catch (error) {
    return res.status(500).json({
      err: error,
    });
  }
};

module.exports = {
  addProduct,
  updateProduct,
  getProducts,
  getProductCategorywise,
};
