require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./api/user/user.routes");
const cors = require("cors");
const connection = require("./config/database");
app.use(cors());

app.use(express.json());
app.use("/", router);

app.listen(process.env.PORT || 3000, () => {
  console.log("---------<start>----------");
  connection.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Db connected");
  });
});
