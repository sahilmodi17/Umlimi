const express = require("express");
const router = express.Router();
const {
  adminRegister,
  adminLogin,
  userRegister,
  userLogin,
  sendOtp,
  verifyOTP,
  getAllUser,
} = require("../controllers/auth");

router.post("/admin/register", adminRegister);
router.post("/admin/login", adminLogin);
router.post("/user/register", userRegister);
router.post("/user/login", userLogin);
router.post("/user/sendOtp", sendOtp);
router.post("/user/verify", verifyOTP);
router.get("/getAllUser", getAllUser);

module.exports = router;
