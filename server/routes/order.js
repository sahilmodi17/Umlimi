const express = require("express");
const router = express.Router();
const { placeOrder, getAllOrders } = require("../controllers/order");

router.post("/placeOrder", placeOrder);
router.get("/getAllOrders", getAllOrders);

module.exports = router;
