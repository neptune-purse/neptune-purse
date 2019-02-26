const Sequelize = require('sequelize')
const db = require('../db')

const Shape = db.define('shape', {
  name: Sequelize.STRING,
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  size: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['small', 'medium', 'large']]
    }
  },
  color: Sequelize.STRING,
  price: Sequelize.FLOAT,
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "../../../public/favicon.ico"
  }
})
module.exports = Shape
