const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  depositMoney,
  transferMoney,
} = require("../../controllers/users.controller");

router.post("/create", createUser);
router.post("/login", loginUser);
router.post("/deposit", depositMoney);
router.post("/transfer", transferMoney);

module.exports = router;
