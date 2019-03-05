const router = require('express').Router()
const {OrderItem} = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const order = await OrderItem.create({quantity: 1, shapeId: req.body.id})
    res.json(req.body)
  } catch (error) {
    next(error)
  }
})
