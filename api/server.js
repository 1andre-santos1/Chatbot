const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const apiRoutes = require('./app/routes/apiRoutes.js');
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


app.get('/api/users', function(req, res){
    db.Utilizadores.findAll({

    }).then(function(result){
        res.json(result);
    })
});

//apiRoutes(app, db);

    app.listen(8000, function(){
        console.log("A escuta no porto 8000");
    });


