const express = require("express");
const { registerUser,loginUser } = require("../controllers/authControllers");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("working users");
});

router.post("/register",registerUser);

router.post("/login",loginUser);

module.exports = router;
