const mysql = require("mysql");

const db = mysql.createPool({
  host: process.env?.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root', 
  password: process?.env.DB_PASSWORD || 'teste', 
  database: process?.env.DB_NAME || 'crudatto',
});

module.exports = db;
