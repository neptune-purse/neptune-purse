const router = require('express').Router()
const {Shape} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const shapes = await Shape.findAll()
    res.json(shapes)
  } catch (err) {
    next(err)
  }
})

router.get('/:shapeId', async (req, res, next) => {
  try {
    const shape = await Shape.findById(req.params.shapeId)
    res.json(shape)
  } catch (err) {
    next(err)
  }
})
