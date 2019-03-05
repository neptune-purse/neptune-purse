const router = require('express').Router()
const {orderItem} = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
  try {
    console.log('THIS IS INSIDE THE ROUTER', req.body)
  } catch (error) {
    next(error)
  }

  const order = {productId: req.body.productId, quantity: req.body.quantity}
  res.json(order)
})
