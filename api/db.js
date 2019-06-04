const db = require('./models');
const utilizadores = ('./models/utilizadores.js');
const Sequelize = require('sequelize');

db.sequelize.sync().then(() => {
    console.log('Conecção feita com sucesso!');
  })
  .catch(err => {
    console.error('Não foi possível conectar com a base de dados:', err);
  });
  
