export default (sequelize, Datatypes) => {
    const Locations = sequelize.define( 'Locations', {
        name: Datatypes.STRING
    });

    return Locations;

};