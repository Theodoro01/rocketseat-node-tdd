const { User } = require('../../src/app/models')
const request = require('supertest')
const truncate = require('../utils/truncate')
const app = require('../../src/app.js')

describe('Authenticate', () => {
  beforeEach(async () => {
    await truncate()
  })
  it('should authenticate with valid credentials', async () => {
    const user = await User.create({
      name: 'Diego',
      email: 'diego@rocketseat.com.br',
      password_hash: '1234567'
    })
    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '162568347'
      })

    expect(response.statusCode).toBe(200)
  })
})
