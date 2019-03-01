/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Shape = db.model('shape')

describe('The `Shape` model', () => {
  before(() => {
    return db.sync({force: true})
  })

  let shape
  beforeEach(async () => {
    shape = await Shape.create({
      name: 'Medium Blue Circle',
      description: 'TBA',
      size: 'small',
      color: 'Blue',
      price: 15,
      imageUrl: '/img/products/blue_circle.png'
    })
  })

  describe('attributes definition', () => {
    it('requires `specific size`', async () => {
      shape.size = 'extra small'

      let result, error
      try {
        result = await shape.validate()
      } catch (err) {
        error = err
      }

      if (result)
        throw Error(
          'validation should fail when size input is not `small`, `medium`, or `large` '
        )

      expect(error).to.be.an.instanceOf(Error)
    })
  })
})
