const router = require('express').Router()
const {Shape} = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
  const order = {productId: req.body.productId, quantity: req.body.quantity}
  res.json(order)
})
