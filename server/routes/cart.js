const express = require("express");
const router = express.Router();
const {
  addToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItemFromCart,
  getCartProducts,
} = require("../controllers/cart");

router.post("/addToCart", addToCart);
router.post("/increase", increaseItemQuantity);
router.post("/decrease", decreaseItemQuantity);
router.post("/remove", removeItemFromCart);
router.get("/getCartProduct/:userId", getCartProducts);

module.exports = router;
