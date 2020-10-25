const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  HOST: "us-cdbr-east-02.cleardb.com",
  USER: "bb20409b3c442a",
  PASSWORD: "d3c4ca14",
  DB: "heroku_586131980912611",
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
