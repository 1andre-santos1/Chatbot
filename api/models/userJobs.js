module.exports = function(sequelize, Datatypes){
    const UserJobs = sequelize.define( 'UserJobs', {
        idUser: {
            type: Datatypes.INTEGER,
            references: 'User',
            referencesKey: 'id',
            allowNull: false
          },
        idJob: {
            type: Datatypes.INTEGER,
            references: 'Jobs',
            referencesKey: 'id',
            allowNull: false
          },
    });

    return UserJobs;

};