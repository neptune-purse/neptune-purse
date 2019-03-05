const router = require('express').Router()
const {Order} = require('../db/models')
module.exports = router

// use params wiht the uderId on the client side from state
router.get('/', async (req, res, next) => {
  try {
    const userId = req.session.passport.user
    console.log('session', req.session)
    const order = await Order.findById(userId)
    res.json(order)
  } catch (err) {
    next(err)
  }
})
