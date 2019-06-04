const Sequelize = require('sequelize');
const utilizadores = require('./models/utilizadores');

const sequelize = new Sequelize('projetofinal','root','password',{
    host: 'localhost',
    dialect: 'mysql'
});

//cria tabela de utiilizadores se não existir
var Utilizadores = sequelize.define('Utilizadores', {
        nome: Sequelize.STRING,
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        email: Sequelize.STRING
});

//inser valores na tabela utilizadores
sequelize.sync({
    force: true
}).then(function() {
    Utilizadores.bulkCreate([
    {
        nome:'Andreia Ferreira',
        username: 'admin1',
        password: 'pass123',
        email: 'aferreira@hotmail.com'
    },
    {
        nome:'André Santos',
        username: 'admin2',
        password: 'pass123',
        email: 'asantos@hotmail.com'

    }
]);
});

