const router = require('express').Router()
const {orderItem} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orderItems = orderItem.findAll()
    res.json(orderItems)
  } catch (err) {
    next(err)
  }
})
