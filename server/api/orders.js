const router = require('express').Router()
const {Order} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const userId = req.session.passport.user
    const order = await Order.findById(userId)
    res.json(order)
  } catch (err) {
    next(err)
  }
})
