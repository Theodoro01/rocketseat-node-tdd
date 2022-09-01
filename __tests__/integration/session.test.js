const { User } = require('../../src/app/models')

describe('Authenticate', () => {
  it('Should sum two numbers', async () => {
    const user = await User.create({
      name: 'Diego',
      email: 'diego@rocketseat.com.br',
      password_hash: '23756482783'
    })
    console.log(user)
    expect(user.email).toBe('diego@rocketseat.com.br')
  })
})
