const routes = require('express').Router()

const authMiddkeware = require('./app/middleware/auth')

const SessionController = require('./app/controllers/SessionController.js')

routes.post('/sessions', SessionController.store)
routes.get('/dashboard', authMiddkeware, (req, res) => {
  return res.status(200).send()
})

module.exports = routes
