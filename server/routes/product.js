const express = require("express");
const router = express.Router();
const {
  addProduct,
  updateProduct,
  getProducts,
  getProductCategorywise,
} = require("../controllers/product");

router.post("/addProduct", addProduct);
router.patch("/updateProduct/:productId", updateProduct);
router.get("/getAllProducts", getProducts);
router.get("/getProductCategory/:category", getProductCategorywise);

module.exports = router;
