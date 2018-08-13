
//require dotenv
require("dotenv").config();

// Set up MySQL connection.
const mysql = require("mysql");

if(process.env.JAWSDB_URL){
const connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  //MySQL connection - using .env file
  const connection = mysql.createConnection(
    {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB
    });
  };

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
