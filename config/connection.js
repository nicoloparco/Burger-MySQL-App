const mysql = require("mysql")
var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-05.cleardb.net",
    port: 3306,
    user: "bff44ce58e9705",
    password: "676e3259",
    database: "heroku_4affa8582a960a4"
});


connection.connect(function(err) {
    if (err) {
    console.error("error connecting: " + err.stack);
    return;
}
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;


