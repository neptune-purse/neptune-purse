/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Shape = db.model('shape')

// describe('Shape model', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('Shape Model', () => {
//     describe('correct', () => {
//       let shape

//       beforeEach(async () => {
//         shape = await Shape.create({
//           name: 'Medium Blue Circle',
//           description: 'TBA',
//           size: 'medium',
//           color: 'Blue',
//           price: 15,
//           imageUrl: '/img/products/blue_circle.png'
//         })
//       })

//       it('returns true if the password is correct', () => {
//         expect(shape.correctPassword('bones')).to.be.equal(true)
//       })

//       it('returns false if the password is incorrect', () => {
//         expect(shape.correctPassword('bonez')).to.be.equal(false)
//       })
//     })

//     // end describe('correctPassword')
//   }) // end describe('instanceMethods')
// }) // end describe('Shape model')

describe('The `Shape` model', () => {
  before(() => {
    return db.sync({force: true})
  })

  let shape
  beforeEach(async () => {
    shape = await Shape.create({
      name: 'Medium Blue Circle',
      description: 'TBA',
      size: 'medium',
      color: 'Blue',
      price: 15,
      imageUrl: '/img/products/blue_circle.png'
    })
  })

  // afterEach(() => {
  //   return Promise.all([
  //     WaveShaperNode.truncate({ cascade: true }),
  //   ]);
  // });

  describe('attributes definition', () => {
    it('requires `specific size`', async () => {
      shape.size = 'extra small'

      let result, error
      try {
        result = await shape.validate()
      } catch (err) {
        error = err
      }

      if (result) throw Error('validation should fail when content ')

      expect(error).to.be.an.instanceOf(Error)
    })

    it('requires `content`', async () => {
      article.content = null

      let result, error
      try {
        result = await article.validate()
      } catch (err) {
        error = err
      }

      if (result) throw Error('validation should fail when content is null')

      expect(error).to.be.an.instanceOf(Error)
    })

    /**
     * You may want a refresher on Sequelize's validate configurations:
     *
     * http://docs.sequelizejs.com/manual/tutorial/models-definition.html#validations
     */
    it('requires `title` (in a more strict way than for `content`)', async () => {
      article.title = ''

      let result, error
      try {
        result = await article.validate()
      } catch (err) {
        error = err
      }

      if (result) throw Error('validation should fail when title is empty')

      expect(error).to.be.an.instanceOf(Error)
      expect(error.message).to.contain('Validation error')
    })

    /**
     * Some data types allocate more space than others.
     * You can check out the full list of types here:
     *
     * http://docs.sequelizejs.com/variable/index.html#static-variable-DataTypes
     */
    it('can handle long `content`', async () => {
      let articleContent =
        'WALL-E (stylized with an interpunct as WALL·E) is a 2008 American computer-animated science-fiction comedy film produced by Pixar Animation Studios and released by Walt Disney Pictures. Directed by Andrew Stanton, the story follows a robot named WALL-E, who is designed to clean up an abandoned, waste-covered Earth far in the future. He falls in love with another robot named EVE, who also has a programmed task, and follows her into outer space on an adventure that changes the destiny of both his kind and humanity. Both robots exhibit an appearance of free will and emotions similar to humans, which develop further as the film progresses.'

      const result = await Article.create({
        title: 'WALL-E',
        content: articleContent
      })

      expect(result).to.be.an('object')
      expect(result.title).to.equal('WALL-E')
      expect(result.content).to.equal(articleContent)
    })
  })
})
