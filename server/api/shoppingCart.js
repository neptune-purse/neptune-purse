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

router.post('/', async (req, res, next) => {
  try {
    const userActiveOrderNum = await Order.findOne({
      where: {
        userId: req.user.id,
        status: 'active'
      }
    })

    const newItem = {
      quantity: 1,
      orderId: userActiveOrderNum.id,
      shapeId: req.body.id
    }

    const updateItem = await OrderItem.create(newItem)
    // const userActiveOrder = await OrderItem.findOne({
    //   where: {
    //     id: updateItem.id
    //   },
    //   include: [
    //     {
    //       model: Shape
    // }
    //   ]
    // })
    //Need to add Shape info
    // console.log('I wanna get active Order Num', updateItem)
    console.log('im inside route checking post request', updateItem)
    // res.json(updateItem)

    //
  } catch (err) {
    next(err)
  }
})
