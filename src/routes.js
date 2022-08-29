const routes = require('express').Router()
const { User } = require('./app/models')

User.create({
  name: 'Diego',
  email: 'diego@rocketseat.com.br',
  password_hash: '165366271323'
})

module.exports = routes
