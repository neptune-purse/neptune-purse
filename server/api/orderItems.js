const router = require('express').Router()
const {orderItem} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orderId = req.session.orderId
    const orders = await OrderItem.findAll({
      where: {orderId: orderId}
    })
  } catch (err) {
    next(err)
  }
})
