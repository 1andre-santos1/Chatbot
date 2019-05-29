//modules
var mysql = require('mysql');

//coneção com db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bdchatbot"
});
//inicia coneção com db
con.connect(function(err) {
	if (err) throw err;
  console.log("Existe conexão!");
  //****************************************Tabela Utilizadores************************************************************************
	//eliminar tabela
	var sql = "drop table if exists tblUtilizadores;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela apagada");
	});
	//criar tabela
	sql = "create table if not exists tblUtilizadores(id int UNIQUE not null AUTO_INCREMENT, nome varchar(50) not null, username varchar(16) not null, password varchar(50) not null, email varchar(50) not null, primary key(id))ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela tblUtilizadores criada");
	});
	//inserir registos
	sql = "INSERT INTO tblUtilizadores (id, nome, username, password, email) VALUES (1, 'Andreia Ferreira', 'admin1', 'pass123', 'aferreira@hotmail.com'),(2, 'André Santos', 'admin2', 'pass123', 'asantos@hotmail.com')";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Valores inseridos");
  });
//****************************************Tabela Vagas************************************************************************
	//eliminar tabela caso a mesma exista
	sql = "drop table if exists tblVagas;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela apagada");
  });
	//criar tabela
	sql = "create table if not exists tblVagas(id int UNIQUE not null AUTO_INCREMENT, nome varchar(100), descCandidato varchar(255), dataPublicacao date not null, localização varchar(50), área varchar(50), utilizadorID int not null, primary key(id), constraint foreign key (utilizadorID) references tblUtilizadores(id) )ENGINE = InnoDB;";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela tblVagas criada");
  });


  //cálculo da data atual
  var data = new Date();
  var dia = String(data.getDate());
  var mes = String(data.getMonth()+1);
  var ano = data.getFullYear();
  data = ano+"/"+mes+"/"+dia;
  
    //inserir registos
  sql = "INSERT INTO tblVagas (nome, descCandidato, dataPublicacao, localização, área, utilizadorID) values ('Consultor júnior cobol', 'Recém-licenciado em Engenharia Informática ou similare; Conhecimento de programação Cobol; Boa capacidade de aprendizagem e atitude proativa; Conhecimentos funcionais de HR', '"+ data +"', 'Tomar', 'Programação', '1')";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Valores inseridos");
  });
  












   
   //termina coneção
con.end();

});