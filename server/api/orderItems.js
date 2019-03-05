const router = require('express').Router()
const {orderItem} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orderId = req.session.orderId
    const orders = await OrderItem.findAll({
      where: {orderId: orderId}
    })
    res.json({orderId: orderId, orders: orders})
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const item = req.body
  try {
    const query = await OrderItem.findOrCreate({
      shapeId: item.shapeid,
      orderId: item.orderId
    })
    if (query[1] === false) {
      query[0].quantity = query[0].quantity + item.quantity
    }
    const orderItem = query[0]
    res.json(orderItem)
  } catch (err) {
    next(err)
  }
})
