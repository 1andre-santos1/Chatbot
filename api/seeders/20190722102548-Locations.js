'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Locations', [{
      name: 'Tomar',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Lisboa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Viseu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Porto',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Coimbra',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */

    return queryInterface.bulkDelete('Locations', null, {});
  }
};
