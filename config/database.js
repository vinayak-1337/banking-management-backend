require("dotenv").config();
const { createPool } = require("mysql");

const connection = createPool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10,
  multipleStatements: true,
});

module.exports = connection;
