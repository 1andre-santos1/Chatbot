module.exports = function(sequelize, Datatypes){
    const userJobs = sequelize.define( 'userJobs', {
        idUser: {
            type: DataTypes.INTEGER,
            references: 'User',
            referencesKey: 'id',
            allowNull: false
          },
          idJob: {
            type: DataTypes.INTEGER,
            references: 'Jobs',
            referencesKey: 'id',
            allowNull: false
          },
    });

    return userJobs;

};