var mysql = require('mysql');


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "inventory-app"
});

module.exports = connection;