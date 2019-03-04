const router = require('express').Router()
const {Order, OrderItem} = require('../db/models')
module.exports = router

// router.get('/', async (req, res, next) => {
//   try {
//     const userId = req.session.passport.user
//     console.log('session', req.session)
//     const order = await Order.findById(userId)
//     res.json(order)
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

// router.get('/:userId', async (req, res, next) => {
//   try {
//     const userOrder = await Order.findById(req.params.userId)
//     res.json(userOrder)
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.orderId)
    res.json(order)
  } catch (err) {
    next(err)
  }
})

router.get('/:orderId/orderItems', async (req, res, next) => {
  try {
    const orderItems = await OrderItem.findAll({
      where: {
        orderId: req.params.orderId
      }
    })
    res.json(orderItems)
  } catch (err) {
    next(err)
  }
})
