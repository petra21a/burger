// Set up MySQL connection.
const mysql = require("mysql");

//MySQL connection - using .env file
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
  
    // Your port; if not 3306 (default in documentation)
    port: process.env.MYSQL_PORT,
  
    // Your username
    user: process.env.MYSQL_USER,
  
    // Your password
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
  });

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
