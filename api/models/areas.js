module.exports = function(sequelize, Datatypes){
    const Areas = sequelize.define( 'Areas', {
        nome: Datatypes.STRING
    });

    return Areas;

};