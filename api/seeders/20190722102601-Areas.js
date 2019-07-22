'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Areas', [{
      name: 'Consultoria',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Infraestruturas',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Desenvolvimento',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
    return queryInterface.bulkDelete('Areas', null, {});
  }
};
