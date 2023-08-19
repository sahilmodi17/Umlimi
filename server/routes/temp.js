const express = require("express");
const router = express.Router();

const { getAddress, addStudent } = require("../controllers/temp");

router.post("/student/addStudent", addStudent);
router.get("/address/getAddress/:studentId", getAddress);

module.exports = router;
