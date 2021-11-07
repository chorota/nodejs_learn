const path = require("path");
const { sql } = require("@garafu/mysql-fileloader")( { root: path.join(__dirname, "./sql") });
const pool = require("./pool");

const MySQLClient = {
  executeQuery: async function (query, values){
    var result = await pool.executeQuery(query,values);
    return result;
  }
};

module.exports = {
  MySQLClient,
  sql
};