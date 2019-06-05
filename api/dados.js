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
        password: '$2b$08$Fh6Y6zd4zsHP1igb15PK0.cI2O6y48jYj1zP4m6MbTylOtPKDwqk.',
        email: 'aferreira@hotmail.com'
    },
    {
        nome:'André Santos',
        username: 'admin2',
        password: '$2b$08$wklXozkQ266hgRm2y6f7KOcjZPTLdKOVTp35TbRKnbj0hmrzNVrBW',
        email: 'asantos@hotmail.com'

    }
]);
});

//criar tabela de localização
var Localizacoes = sequelize.define('Localizacoes', {
    nome: Sequelize.STRING
});

sequelize.sync({
    force:true
}).then(function(){
    Localizacoes.bulkCreate([
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

//Criação da tabela de Áreas 
var Areas = sequelize.define('Areas', {
    nome: Sequelize.STRING
});

//inserção de valores na tabela
sequelize.sync({
    force: true
}).then(function() {
    Areas.bulkCreate([
    {
        nome: 'Desenvolvimento de aplicações Web'
    },
    {
        nome:'Desenvolvimento de aplicações para dispositivos móveis'
    },
    {
        nome:'Base de Dados'
    },
    {
        nome:'Análise de sistemas'
    },
    {
        nome: 'Redes de Dados'
    }
]);
});

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
        localizacao: 2, 
        area: 4,
        data: Date.getDate
    },
    {
        nome: 'Programador Junior',
        descricaoCandidato: 'Recém-Licenciado em Engenharia Informática ou similares; Gosto pela área de programação; Boa comunicação e atitude proativa; Conhecimentos de inglês serão valorizados; Bom comunicador e orientação a cliente.',
        localizacao: 2, 
        area: 1,
        data: Date.getDate
    },
    {

        nome: 'Consultor Junior Cobol',
        descricaoCandidato: 'Recém-Licenciado em Engenharia Informática ou similares; Conhecimentos de programação Cobol; Boa capacidade de aprendizagem e atitude proativa; Conhecimentos funcionais de HR.',
        localizacao: 1, 
        area: 1,
        data: Date.getDate
    },
    {
        nome: 'TÉCNICO DE INFORMÁTICA / RECÉM-LICENCIADO',
        descricaoCandidato: 'Recém-Licenciado em Engenharia Informática ou similares; Interesse em técnologias IBM (iSeries; AS400) ; Bons conhecimentos Inglês; Disponibilidade',
        localizacao: 1, 
        area: 1,
        data: Date.getDate
    },
    
]);
});

