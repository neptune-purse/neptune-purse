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

router.post('/', async (req, res, next) => {
  const item = req.body
  const userId = req.user.id
  const order = await Order.findOne({
    where: {userId: userId, status: 'active'}
  })

  try {
    const orderItem = await OrderItem.findOrCreate({
      where: {
        shapeId: item.id,
        orderId: order.id
      }
    })
    if (orderItem[1] === false) {
      orderItem[0].quantity += item.quantity
    }
    res.json(orderItem[0])
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const item = await OrderItem.find({
      where: {
        shapeId: req.body.shapeId
      }
    })
    const updatedItem = await item.update({
      quantity: req.body.quantity
    })
    res.json(updatedItem)
  } catch (error) {
    next(err)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    // console.log("delete route", req.params.shapeId)
    // await OrderItem.destroy({
    //   where: {
    //     shapeId: req.params.shapeId
    //   }
    // })
    console.log('number here', req.body)
    const deleteItem = await OrderItem.findById(id)
    await delteItem.destroy()
  } catch (error) {
    next(error)
  }
})
