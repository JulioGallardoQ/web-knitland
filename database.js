// Contain all relevant information 
// to the database we wish to connect to

// Create an instance of the Mysql Module
var mysql = require("mysql");

var connection = mysql.createConnection({

    // Host name
    host: "localhost",
    // Database name
    database: "contactknit",
    // Username
    user:"root",
    // Password
    password:"password"
})


// Send the Connection that we created 
// To the express.js file using
// module.exports = connection

module.exports = connection;