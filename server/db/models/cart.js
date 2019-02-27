const Sequelize = require('sequelize')
const db = require('../db')

// a order is essentially a cart that includes (eagerloads) all associated shapeId's

const Cart = db.define('cart', {
  //quantity: Sequelize.INTEGER,
  name: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['order', 'cart']]
  }
})

module.exports = Cart
