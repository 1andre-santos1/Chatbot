module.exports = function(sequelize, Datatypes){
    const Vagas = sequelize.define( 'Vagas', {
        nome: Datatypes.STRING,
        descricaoCandidato: Datatypes.STRING,
        localizacao: Datatypes.STRING,
        area: Datatypes.STRING,
        data: Datatypes.STRING

    });

    return Vagas;

};