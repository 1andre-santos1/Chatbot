module.exports = function(sequelize, Datatypes){
    const Localizacao = sequelize.define( 'Localizacao', {
        nome: Datatypes.STRING
    });

    return Localizacao;

};