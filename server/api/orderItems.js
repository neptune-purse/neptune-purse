const router = require('express').Router()
const {OrderItem, Order, Shape} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const userId = req.user.id
    const order = await Order.findOne({
      where: {
        userId,
        status: 'active'
      }
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

router.put('/', async (req, res, next) => {
  const item = req.body
  const userId = req.user.id
  const order = await Order.findOne({
    where: {userId: userId, status: 'active'}
  })
  try {
    const [orderItem, wasCreated] = await OrderItem.findOrCreate({
      where: {
        shapeId: item.id,
        orderId: order.id
      }
    })
    // console.log('ORDERITEM: ', orderItem)
    if (wasCreated === false) {
      orderItem.quantity += item.quantity
    }
    res.json(orderItem)
  } catch (err) {
    next(err)
  }
})
