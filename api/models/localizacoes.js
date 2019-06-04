module.exports = function(sequelize, Datatypes){
    const Localizacoes = sequelize.define( 'Localizacoes', {
        nome: Datatypes.STRING
    });

    return Localizacoes;

};