module.exports = function(sequelize, Datatypes){
    const Users = sequelize.define( 'Users', {
        name: Datatypes.STRING,
        username: Datatypes.STRING,
        password: Datatypes.STRING,
        email: Datatypes.STRING

    });

    return Users;

};