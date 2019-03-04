const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

function authenticateMiddleware(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.status(404).json('Page cannot be found!')
}

router.get('/', authenticateMiddleware, async (req, res, next) => {
  // const currentUser = await User.findAll({
  //   where : {
  //     id: req.session.passport.user
  //   }
  // })
  // console.log('im inside route', currentUser)

  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
