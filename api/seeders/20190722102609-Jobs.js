'use strict';

const models = require('../models');
const Locations = models.Locations;
const Areas = models.Areas;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
   //Variáveis das Localizações
   const location_Tomar = await Locations.findOne({
    where: {
        name: "Tomar"
    }
   });
   const location_Lisboa = await Locations.findOne({
    where: {
        name: "Lisboa"
    }
   });
   const location_Viseu = await Locations.findOne({
    where: {
        name: "Viseu"
    }
   });
   const location_Porto = await Locations.findOne({
    where: {
        name: "Porto"
    }
   });
   const location_Coimbra = await Locations.findOne({
    where: {
        name: "Porto"
    }
   });

    
   //Variáveis das Áreas
   const area_consult = await Areas.findOne({
    where: {
        name: "Consultoria"
    }
   });
   const area_consult = await Areas.findOne({
    where: {
        name: "Infraestruturas"
    }
   });
   const area_consult = await Areas.findOne({
    where: {
        name: "Desenvolvimento"
    }
   });
   
   
   return await queryInterface.bulkInsert('Jobs', [{
    name: 'Teste',
    candidateDescript: 'Teste',
    remote: true,
    formation: true,
    travelOtCountrys: true,
    shifts: false,
    location: location_Porto.id,
    area: area_consult.id,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Jobs', null, {});
  }
};
