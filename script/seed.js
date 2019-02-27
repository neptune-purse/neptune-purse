'use strict'

const db = require('../server/db')
const {Shape} = require('../server/db/models')

const shapes = [
  {
    name: 'Blue Circle',
    description: 'TBA',
    size: 'small',
    color: 'Blue',
    price: 5,
    imageUrl: '/img/products/blue_circle.png'
  },
  {
    name: 'Blue Circle',
    description: 'TBA',
    size: 'medium',
    color: 'Blue',
    price: 15,
    imageUrl: '/img/products/blue_circle.png'
  },
  {
    name: 'Blue Circle',
    description: 'TBA',
    size: 'large',
    color: 'Blue',
    price: 25,
    imageUrl: '/img/products/blue_circle.png'
  },
  {
    name: 'Red Circle',
    description: 'TBA',
    size: 'small',
    color: 'Red',
    price: 5,
    imageUrl: '/img/products/red_circle.png'
  },
  {
    name: 'Red Circle',
    description: 'TBA',
    size: 'medium',
    color: 'Red',
    price: 15,
    imageUrl: '/img/products/red_circle.png'
  },
  {
    name: 'Red Circle',
    description: 'TBA',
    size: 'large',
    color: 'Red',
    price: 25,
    imageUrl: '/img/products/red_circle.png'
  },
  {
    name: 'Yellow Circle',
    description: 'TBA',
    size: 'small',
    color: 'Yellow',
    price: 5,
    imageUrl: '/img/products/yellow_circle.png'
  },
  {
    name: 'Yellow Circle',
    description: 'TBA',
    size: 'medium',
    color: 'Yellow',
    price: 15,
    imageUrl: '/img/products/yellow_circle.png'
  },
  {
    name: 'Yellow Circle',
    description: 'TBA',
    size: 'large',
    color: 'Yellow',
    price: 25,
    imageUrl: '/img/products/yellow_circle.png'
  },
  {
    name: 'Blue Square',
    description: 'TBA',
    size: 'small',
    color: 'Blue',
    price: 5,
    imageUrl: '/img/products/blue_square.png'
  },
  {
    name: 'Blue Square',
    description: 'TBA',
    size: 'medium',
    color: 'Blue Square',
    price: 15,
    imageUrl: '/img/products/blue_square.png'
  },
  {
    name: 'Blue Square',
    description: 'TBA',
    size: 'large',
    color: 'Blue',
    price: 25,
    imageUrl: '/img/products/blue_square.png'
  },
  {
    name: 'Red Square',
    description: 'TBA',
    size: 'small',
    color: 'Red',
    price: 5,
    imageUrl: '/img/products/red_square.png'
  },
  {
    name: 'Red Square',
    description: 'TBA',
    size: 'medium',
    color: 'Red',
    price: 15,
    imageUrl: '/img/products/red_square.png'
  },
  {
    name: 'Red Square',
    description: 'TBA',
    size: 'large',
    color: 'Red',
    price: 25,
    imageUrl: '/img/products/red_square.png'
  },
  {
    name: 'Yellow Square',
    description: 'TBA',
    size: 'small',
    color: 'Yellow',
    price: 5,
    imageUrl: '/img/products/yellow_square.png'
  },
  {
    name: 'Yellow Square',
    description: 'TBA',
    size: 'medium',
    color: 'Yellow',
    price: 15,
    imageUrl: '/img/products/yellow_square.png'
  },
  {
    name: 'Yellow Square',
    description: 'TBA',
    size: 'large',
    color: 'Yellow',
    price: 25,
    imageUrl: '/img/products/yellow_square.png'
  },
  {
    name: 'Blue Triangle',
    description: 'TBA',
    size: 'small',
    color: 'Blue',
    price: 5,
    imageUrl: '/img/products/blue_triangle.png'
  },
  {
    name: 'Blue Triangle',
    description: 'TBA',
    size: 'medium',
    color: 'Blue',
    price: 15,
    imageUrl: '/img/products/blue_triangle.png'
  },
  {
    name: 'Blue Triangle',
    description: 'TBA',
    size: 'large',
    color: 'Blue',
    price: 25,
    imageUrl: '/img/products/blue_triangle.png'
  },
  {
    name: 'Red Triangle',
    description: 'TBA',
    size: 'small',
    color: 'Red',
    price: 5,
    imageUrl: '/img/products/red_triangle.png'
  },
  {
    name: 'Red Triangle',
    description: 'TBA',
    size: 'medium',
    color: 'Red',
    price: 15,
    imageUrl: '/img/products/red_triangle.png'
  },
  {
    name: 'Red Triangle',
    description: 'TBA',
    size: 'large',
    color: 'Red',
    price: 25,
    imageUrl: '/img/products/red_triangle.png'
  },
  {
    name: 'Yellow Triangle',
    description: 'TBA',
    size: 'small',
    color: 'Yellow',
    price: 5,
    imageUrl: '/img/products/yellow_triangle.png'
  },
  {
    name: 'Yellow Triangle',
    description: 'TBA',
    size: 'medium',
    color: 'Yellow',
    price: 15,
    imageUrl: '/img/products/yellow_triangle.png'
  },
  {
    name: 'Yellow Triangle',
    description: 'TBA',
    size: 'large',
    color: 'Yellow',
    price: 25,
    imageUrl: '/img/products/yellow_triangle.png'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(
    shapes.map(shape => {
      return Shape.create(shape)
    })
  )

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
