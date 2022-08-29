const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  host: process.env.DATABASE_HOST,
  username: process.env.USER_NAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  dialect: 'postgres',
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
