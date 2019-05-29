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

//Pesquisa os utlizadores
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

//utilizador pelo seu ID
app.get("/utilizadores/:id", (req,res) => {
    let sql = "SELECT * FROM tblUtilizadores WHERE id= ?" 
    // req.params.id mapeia o :id que está no URL acima.
    con.query(sql, [req.params.id], (err, results) => {
      if (err) {
        console.error("Erro get user", err);
        res.status(500).json({ erro: "Erro na query" });
      } else {
        if (results.length ==0) {
      res.status(404).json({ erro: "Utilizador não encontrado" });
        } else {
          res.status(200).json(results);
        }
      }
    });
  });
  // listar vagas
  app.get("/vagas", (req, res) => {
    let sql = "SELECT * FROM tblVagas";
  
    con.query(sql, (err, results) => {
      if (err) {
        console.error("Erro get users", err);
        res.status(500).json({ erro: "Erro na query" });
      } else {
        res.status(200).json(results);
      }
    });
  });
   //listar vaga pelo seu ID
   app.get("/vagas/:id", (req, res) => {
    let sql = "SELECT * FROM tblVagas WHERE id = ?";
  
    con.query(sql,  [req.params.id], (err, results) => {
      if (err) {
        console.error("Erro get users", err);
        res.status(500).json({ erro: "Erro na query" });
      } else {
          if(results.length==0){
            res.status(404).json({ erro: "Vaga não encontrada" })
          }
          else{
            res.status(200).json(results);
          }
        
      }
    });
  });



//inicia o servidor
app.listen(port);
console.log('API funcionando!');

