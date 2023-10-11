const express = require("express");
const router = express.Router();
const {
  addProduct,
  updateProduct,
  getProducts,
  getProductCategorywise,
  searchProduct,
} = require("../controllers/product");

router.post("/addProduct", addProduct);
router.patch("/updateProduct/:productId", updateProduct);
router.get("/getAllProducts", getProducts);
router.get("/getProductCategory", getProductCategorywise);
router.post("/searchProduct", searchProduct);

module.exports = router;
