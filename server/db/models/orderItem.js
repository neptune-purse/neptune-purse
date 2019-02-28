const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('orderItem', {
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
})

module.exports = OrderItem
