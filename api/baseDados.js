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
  console.log("Existe conexão!");
  //criação da base de dados
  const sql = "CREATE TABLE tblUilizadores (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), username VARCHAR(255), password VARCHAR(255), email VARCHAR(255))";
  con.query(sql, function (err, result) { 
    if (err) throw err;
    console.log("Tabela criada!");
  });
});