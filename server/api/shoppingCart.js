const router = require('express').Router()
const {Order, OrderItem, Shape} = require('../db/models')
module.exports = router

// /shoppiongCart without user info. just actice item
// router.get('/', async (req, res, next) => {
//   try {
//     const userActiveOrderNum = await Order.findOne({
//       where: {
//         userId: req.user.id,
//         status: 'active'
//       }
//     })
//     const userActiveOrder = await OrderItem.findAll({
//       where: {
//         orderId: userActiveOrderNum.id
//       }
//     })
//     res.json(userActiveOrder)
//   } catch (err) {
//     next(err)
//   }
// })

// /shoppiongCart without user info. including shape info
router.get('/', async (req, res, next) => {
  try {
    const userActiveOrderNum = await Order.findOne({
      where: {
        userId: req.user.id,
        status: 'active'
      }
    })
    const userActiveOrder = await OrderItem.findAll({
      where: {
        orderId: userActiveOrderNum.id
      },
      include: [
        {
          model: Shape
        }
      ]
    })
    res.json(userActiveOrder)
  } catch (err) {
    next(err)
  }
})

// router.post('/', async (req, res, next) => {
//   try {
//     const addNewItem = await OrderItem.create(req.body, )
//     res.json(userActiveOrder)
//   } catch (err) {
//     next(err)
//   }
// })
