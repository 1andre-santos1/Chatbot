module.exports = function(sequelize, Datatypes){
    const Vagas = sequelize.define( 'Vagas', {
        nome: Datatypes.STRING,
        descricaoCandidato: Datatypes.STRING,
        trabalhoRemoto: Datatypes.BOOLEAN,
        formacaoInic: Datatypes.BOOLEAN,
        deslocacaoPaises: Datatypes.BOOLEAN,
        turnos: Datatypes.BOOLEAN,
        localizacao:{
            type: Datatypes.INTEGER,
            references: {
                model: 'Localizacoes',
                key: 'id',
                as: 'localizacao'
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

    return Vagas;

};