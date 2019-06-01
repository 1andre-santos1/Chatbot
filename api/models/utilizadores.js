module.exports = function(sequelize, Datatypes){
    const Utilizadores = sequelize.define( 'Utilizadores', {
        nome: Datatypes.STRING,
        username: Datatypes.STRING,
        password: Datatypes.STRING,
        email: Datatypes.STRING

    });

    return Utilizadores;

};