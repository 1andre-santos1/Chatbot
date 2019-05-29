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
  const sql = "INSERT INTO tblUilizadores (name, username, password, email) values ('Andreia Ferreira', 'admin1', 'pass123', 'aferreira@hotmail.com'),('André Santos', 'admin2', 'pass123', 'asantos@hotmail.com')";
  con.query(sql, function (err, result) { 
    if (err) throw err;
    console.log("Valores Inseridos!");
  });
});