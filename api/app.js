//Servidor da aplicação
const http = require('http');
const mysql=require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var con = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'password',
	database : 'bdchatbot'
});

app.get("/utilizadores", (req, res) => {
    let sql = "SELECT * FROM tblUtilizadores";
  
    con.query(sql, (err, results) => {
      if (err) {
        console.error("Erro get users", err);
        res.status(500).json({ erro: "Erro na query" });
      } else {
        res.status(200).json(results);
      }
    });
  });


//inicia o servidor
app.listen(port);
console.log('API funcionando!');

