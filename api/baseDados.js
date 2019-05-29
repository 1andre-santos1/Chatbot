'use strict'

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bdchatbot"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM tblutilizadores", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});