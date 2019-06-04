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

//criar tabela de localização
var Localizacao = sequelize.define('Localizacao', {
    nome: Sequelize.STRING
});

sequelize.sync({
    force:true
}).then(function(){
    Localizacao.bulkCreate([
        {
            nome:'Tomar'
        },
        {
            nome:'Lisboa'
        },
        {
            nome:'Viseu'
        },
        {
            nome:'Porto'
        },
        {
            nome:'Coimbra'
        },
        {
            nome:'Évora'
        }
    ])
})




//criar tabela de vagas 
var Vagas = sequelize.define('Vagas',{
        nome: Sequelize.STRING,
        descricaoCandidato: Sequelize.STRING,
        localizacao: Sequelize.INTEGER,
        area: Sequelize.INTEGER,
        data: Sequelize.DATE
});


//inser valores na tabela vagas
sequelize.sync({
    force: true
}).then(function() {
    Vagas.bulkCreate([
    {
        nome: 'Analista Funcional Junior',
        descricaoCandidato: 'Recém-Licenciado em Engenharia Informática ou similares; Conhecimentos de inglês serão valorizados; Bom comunicador e orientação a cliente.',
        localizacao: 2, //Lisboa
        area: 2,
        data: Date.getDate
    },
    {
        nome:''
    }
]);
});

