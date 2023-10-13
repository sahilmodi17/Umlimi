const Order = require("../models/Order");

const placeOrder = async (req, res) => {
  console.log(req.body);
  try {
    const { userId, products } = req.body;
    const newOrder = new Order({
      userId: userId,
      products: products,
    });

    await newOrder.save();
    res
      .status(201)
      .json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    console.error("Error placing the order:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .sort({ orderDate: -1 })
      .populate("userId")
      .populate("products.productId");

    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    res.status(200).json({ orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  placeOrder,
  getAllOrders,
};