const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  depositMoney,
  transferMoney,
  getUser,
} = require("../../controllers/users.controller");
const {authenticateToken} = require("../../middleware/authenticate");

router.post("/create", createUser);
router.post("/login", loginUser);
router.post("/deposit", depositMoney);
router.post("/transfer", transferMoney);
router.get("/getUser", authenticateToken, getUser);

module.exports = router;
