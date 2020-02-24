const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  /* APP */
  APP_NAME: process.env.APP_NAME || 'Rod Development',
  APP_ZONE: process.env.APP_ZONE || 'development',
  APP_PORT: process.env.APP_PORT || 3000
}