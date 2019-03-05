const router = require('express').Router()
const {OrderItem, Order, Shape} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const userId = req.user.id
    const order = await Order.findOne({
      where: {userId: userId, status: 'active'}
    })
    const orderId = order.id
    const orders = await OrderItem.findAll({
      where: {orderId: orderId},
      include: [{model: Shape}]
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const item = req.body
  const userId = req.user.id
  const order = await Order.findOne({
    where: {userId: userId, status: 'active'}
  })
  const orderId = order.id
  try {
    const orderItem = await OrderItem.findOrCreate({
      shapeId: item.shapeid,
      orderId: item.orderId
    })
    if (orderItem[1] === false) {
      orderItem[0].quantity += item.quantity
    }
    res.json(orderItem[0])
  } catch (err) {
    next(err)
  }
})
