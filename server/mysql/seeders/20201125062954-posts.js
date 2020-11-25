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
   const now = new Date();
   await queryInterface.bulkInsert('posts', [
    {
      title: '鬼滅の刃',
      content: 'まだ読んでない',
      user_id: 1,
      created_at: now,
      updated_at: now,
    },
    {
      title: '呪術廻戦',
      content: 'まだ読んでない',
      user_id: 2,
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
    await queryInterface.bulkDelete('posts', null, {});
  }
};
