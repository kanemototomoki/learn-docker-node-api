'use strict';
const bcrypt = require('bcrypt');

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
   const now = new Date();
   await queryInterface.bulkInsert('users', [
    {
      name: 'user_1',
      password: bcrypt.hashSync('super_pw', bcrypt.genSaltSync(10)),
      created_at: now,
      updated_at: now,
    },
    {
      name: 'user_2',
      password: bcrypt.hashSync('ultra_pw', bcrypt.genSaltSync(10)),
      created_at: now,
      updated_at: now,
    },
   ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
