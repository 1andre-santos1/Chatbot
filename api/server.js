const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const apiUtilizadores = require('./app/routes/apiUtilizadores.js');
const apiLocalizacao = require ('./app/routes/apiLocalizacoes.js');
const apiAreas = require ('./app/routes/apiArea.js');
const apiVagas = require('./app/routes/apiVagas');
const Sequelize = require('sequelize');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static("app/public"));


const sequelize = new Sequelize('projetofinal','root','password',{
    host: 'localhost',
    dialect: 'mysql'
});

apiUtilizadores(app, db);
apiLocalizacao(app, db);
apiAreas(app, db);
apiVagas(app, db);
//db.sequelize.sync().then(function(){
app.listen(8000, function(){
        console.log("A escuta no porto 8000");
});
//});



   


