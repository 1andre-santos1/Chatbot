module.exports = function(sequelize, Datatypes){
    const Jobs = sequelize.define( 'Jobs', {
        name: Datatypes.STRING,
        candidateDescript: Datatypes.STRING,
        remote: Datatypes.BOOLEAN,
        formation: Datatypes.BOOLEAN,
        travelOtCountrys: Datatypes.BOOLEAN,
        shifts: Datatypes.BOOLEAN,
        date: Datatypes.DATE,
        location:{
            type: Datatypes.INTEGER,
            references: {
                model: 'Locations',
                key: 'id',
                as: 'location'
            }
        }, 
        area: {
            type: Datatypes.INTEGER,
            references: {
                model: 'Areas',
                key: 'id',
                as: 'area'
            }
                    
        }

    });

    return Jobs;

};