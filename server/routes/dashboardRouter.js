const express = require("express");
const router = express.Router();
const { getUser, editUser } = require("../controllers/auth");

router.get("/profile", getUser);
router.patch("/profile/:userId", editUser);

module.exports = router;
