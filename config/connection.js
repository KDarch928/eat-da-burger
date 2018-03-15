// Set up MySQL connection.
var mysql = require("mysql");
//setting up access to the .env file
require("dotenv").config();
//getting access to the key.js file
var key = require("../config/key.js");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: key.mysqlaccess.access,
    database: "burgers_db"
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