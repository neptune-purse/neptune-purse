const Sequelize = require('sequelize')
const db = require('../db')

const Guest = db.define('guest', {
  guestId: Sequelize.STRING,
  cart: Sequelize.ARRAY
})

module.exports = Guest
