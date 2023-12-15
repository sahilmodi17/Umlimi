const { json } = require("express");
const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  // console.log("first");
  const token = req.cookies?.token;
  // console.log(token);
  try {
    if (token === undefined) {
      // console.log("no token");
      return res.status(400).json({ valid: false });
    }
    // console.log("token");
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(payload);
    req.user = { userId: payload.userId, email: payload.email };
    // console.log("hi");
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = authentication;
