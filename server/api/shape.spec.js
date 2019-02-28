import {Agent} from 'https'

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const Shape = db.model('shape')
const app = require('../index')

describe('Shape routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  let storedShapes
  const shapeData = [
    {
      name: 'Small Blue Circle',
      description: 'TBD',
      size: 'small',
      color: 'Blue',
      price: 5
    },
    {
      name: 'Medium Blue Circle',
      description: 'TBD',
      size: 'medium',
      color: 'Blue',
      price: 15
    }
  ]

  beforeEach(async () => {
    const createdShape = await Shape.bulkCreate(shapeData)
    storedShapes = createdShape.map(shape => shape.dataValues)
  })

  describe('GET/ `/api/shapes`', () => {
    it('Serves up all Shapes', async () => {
      const res = await request(app)
        .get('/api/shapes')
        .expect(200)
      expect(res.body).to.have.length(2)
      expect(res.body[0].name).to.equal(storedShapes[0].name)
    })
  })
})
