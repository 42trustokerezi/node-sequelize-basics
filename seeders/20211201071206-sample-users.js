'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return await queryInterface.bulkInsert(
     "Users",
     [
       {
         firstName: 'Tunde',
         lastName: 'olanikan',
         email: 'tunde@gmail.com',
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        firstName: 'Adedayo',
        lastName: 'cole',
        email: 'dayo@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        firstName: 'Lola',
        lastName: 'oshinyemi',
        email: 'lola@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
       }
     ],
     {}
   );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
