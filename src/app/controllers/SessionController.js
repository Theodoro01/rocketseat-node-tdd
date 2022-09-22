const { User } = require('../models')

class SessionController {
  async store (req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }

    const validatePassword = await user.checkPassword(password)

    if (!validatePassword) {
      return res.status(401).json({ message: 'Email or Password is wrong' })
    }

    return res.json({
      user,
      token: user.generateToken()
    })
  }
}
module.exports = new SessionController()
