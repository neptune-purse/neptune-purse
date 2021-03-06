'use strict'

const db = require('../server/db')
const {Shape, User, OrderItem, Order} = require('../server/db/models')

const users = [
  {
    firstName: 'Cody',
    lastName: 'White',
    email: 'cody@fullstack.com',
    password: '123'
  },
  {
    firstName: 'Bob',
    lastName: 'Brown',
    email: 'bob@fullstack.com',
    password: '123'
  }
]

const shapes = [
  {
    name: 'Small Blue Circle',
    description: 'TBA',
    size: 'small',
    color: 'Blue',
    price: 5,
    imageUrl: '/img/products/blue_circle.png'
  },
  {
    name: 'Medium Blue Circle',
    description: 'TBA',
    size: 'medium',
    color: 'Blue',
    price: 15,
    imageUrl: '/img/products/blue_circle.png'
  },
  {
    name: 'Large Blue Circle',
    description: 'TBA',
    size: 'large',
    color: 'Blue',
    price: 25,
    imageUrl: '/img/products/blue_circle.png'
  },
  {
    name: 'Small Red Circle',
    description: 'TBA',
    size: 'small',
    color: 'Red',
    price: 5,
    imageUrl: '/img/products/red_circle.png'
  },
  {
    name: 'Medium Red Circle',
    description: 'TBA',
    size: 'medium',
    color: 'Red',
    price: 15,
    imageUrl: '/img/products/red_circle.png'
  },
  {
    name: 'Large Red Circle',
    description: 'TBA',
    size: 'large',
    color: 'Red',
    price: 25,
    imageUrl: '/img/products/red_circle.png'
  },
  {
    name: 'Small Yellow Circle',
    description: 'TBA',
    size: 'small',
    color: 'Yellow',
    price: 5,
    imageUrl: '/img/products/yellow_circle.png'
  },
  {
    name: 'Medium Yellow Circle',
    description: 'TBA',
    size: 'medium',
    color: 'Yellow',
    price: 15,
    imageUrl: '/img/products/yellow_circle.png'
  },
  {
    name: 'Large Yellow Circle',
    description: 'TBA',
    size: 'large',
    color: 'Yellow',
    price: 25,
    imageUrl: '/img/products/yellow_circle.png'
  },
  {
    name: 'Small Blue Square',
    description: 'TBA',
    size: 'small',
    color: 'Blue',
    price: 5,
    imageUrl: '/img/products/blue_square.png'
  },
  {
    name: 'Medium Blue Square',
    description: 'TBA',
    size: 'medium',
    color: 'Blue Square',
    price: 15,
    imageUrl: '/img/products/blue_square.png'
  },
  {
    name: 'Large Blue Square',
    description: 'TBA',
    size: 'large',
    color: 'Blue',
    price: 25,
    imageUrl: '/img/products/blue_square.png'
  },
  {
    name: 'Small Red Square',
    description: 'TBA',
    size: 'small',
    color: 'Red',
    price: 5,
    imageUrl: '/img/products/red_square.png'
  },
  {
    name: 'Medium Red Square',
    description: 'TBA',
    size: 'medium',
    color: 'Red',
    price: 15,
    imageUrl: '/img/products/red_square.png'
  },
  {
    name: 'Large Red Square',
    description: 'TBA',
    size: 'large',
    color: 'Red',
    price: 25,
    imageUrl: '/img/products/red_square.png'
  },
  {
    name: 'Small Yellow Square',
    description: 'TBA',
    size: 'small',
    color: 'Yellow',
    price: 5,
    imageUrl: '/img/products/yellow_square.png'
  },
  {
    name: 'Medium Yellow Square',
    description: 'TBA',
    size: 'medium',
    color: 'Yellow',
    price: 15,
    imageUrl: '/img/products/yellow_square.png'
  },
  {
    name: 'Large Yellow Square',
    description: 'TBA',
    size: 'large',
    color: 'Yellow',
    price: 25,
    imageUrl: '/img/products/yellow_square.png'
  },
  {
    name: 'Small Blue Triangle',
    description: 'TBA',
    size: 'small',
    color: 'Blue',
    price: 5,
    imageUrl: '/img/products/blue_triangle.png'
  },
  {
    name: 'Medium Blue Triangle',
    description: 'TBA',
    size: 'medium',
    color: 'Blue',
    price: 15,
    imageUrl: '/img/products/blue_triangle.png'
  },
  {
    name: 'Large Blue Triangle',
    description: 'TBA',
    size: 'large',
    color: 'Blue',
    price: 25,
    imageUrl: '/img/products/blue_triangle.png'
  },
  {
    name: 'Small Red Triangle',
    description: 'TBA',
    size: 'small',
    color: 'Red',
    price: 5,
    imageUrl: '/img/products/red_triangle.png'
  },
  {
    name: 'Medium Red Triangle',
    description: 'TBA',
    size: 'medium',
    color: 'Red',
    price: 15,
    imageUrl: '/img/products/red_triangle.png'
  },
  {
    name: 'Large Red Triangle',
    description: 'TBA',
    size: 'large',
    color: 'Red',
    price: 25,
    imageUrl: '/img/products/red_triangle.png'
  },
  {
    name: 'Small Yellow Triangle',
    description: 'TBA',
    size: 'small',
    color: 'Yellow',
    price: 5,
    imageUrl: '/img/products/yellow_triangle.png'
  },
  {
    name: 'Medium Yellow Triangle',
    description: 'TBA',
    size: 'medium',
    color: 'Yellow',
    price: 15,
    imageUrl: '/img/products/yellow_triangle.png'
  },
  {
    name: 'Large Yellow Triangle',
    description: 'TBA',
    size: 'large',
    color: 'Yellow',
    price: 25,
    imageUrl: '/img/products/yellow_triangle.png'
  }
]

const orders = [
  {
    status: 'complete',
    userId: 1
  },
  {
    status: 'complete',
    userId: 2
  },
  {
    status: 'active',
    userId: 1
  },
  {
    status: 'active',
    userId: 2
  }
]

const orderItems = [
  {
    quantity: 2,
    orderId: 1,
    shapeId: 2
  },
  {
    quantity: 3,
    orderId: 4,
    shapeId: 4
  },
  {
    quantity: 1,
    orderId: 3,
    shapeId: 9
  },
  {
    quantity: 10,
    orderId: 3,
    shapeId: 13
  },
  {
    quantity: 8,
    orderId: 2,
    shapeId: 20
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Shape.bulkCreate(shapes)
  await User.bulkCreate(users)
  await Order.bulkCreate(orders)
  await OrderItem.bulkCreate(orderItems)

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
