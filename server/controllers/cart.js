const User = require("../models/User");

const addToCart = async (req, res) => {
  console.log("addToCart");
  try {
    const { userId, productId, qty } = req.body;

    const user = await User.findById(userId);
    console.log(user.password);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const existingCartItem = user.cartData.find(
      (item) => item.productId.toString() === productId
    );

    if (existingCartItem) {
      existingCartItem.qty += qty;
    } else {
      user.cartData.push({ productId, qty });
    }

    await user.save();
    console.log(user.password);
    return res.status(200).json({ message: "Item added to cart successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const decreaseItemQuantity = async (req, res) => {
  try {
    const { productId, userId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const cartItem = user.cartData.find(
      (item) => item.productId.toString() === productId
    );

    if (!cartItem) {
      return res.status(404).json({ error: "Item not found in the cart" });
    }

    if (cartItem.qty > 1) {
      cartItem.qty -= 1;
    }

    await user.save();
    return res.status(200).json(user.cartData);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
const increaseItemQuantity = async (req, res) => {
  try {
    const { productId, userId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const cartItem = user.cartData.find(
      (item) => item.productId.toString() === productId
    );

    if (!cartItem) {
      return res.status(404).json({ error: "Item not found in the cart" });
    }

    cartItem.qty += 1;

    await user.save();
    return res.status(200).json(user.cartData);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getCartProducts = async (req, res) => {
  try {
    const { userId } = req.params; // Assuming userId is in the request parameters

    const user = await User.findById(userId).populate({
      path: "cartData.productId", // Populate the product data from cartData
      select: "_id name price description category", // Select the fields you want
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const cartProducts = user.cartData.map((item) => ({
      _id: item.productId._id,
      name: item.productId.name,
      price: item.productId.price,
      description: item.productId.description,
      category: item.productId.category,
      qty: item.qty,
    }));

    return res.status(200).json(cartProducts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const removeItemFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.cartData = user.cartData.filter(
      (item) => item.productId.toString() !== productId
    );

    await user.save();

    return res
      .status(200)
      .json({ message: "Item removed from the cart successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  addToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  getCartProducts,
  removeItemFromCart,
};
