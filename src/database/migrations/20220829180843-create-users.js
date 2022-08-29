'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNUll: false
      },
      name: {
        type: Sequelize.STRING,
        allowNUll: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNUll: false
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNUll: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNUll: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNUll: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('users')
  }
}
