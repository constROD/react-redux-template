const dotenv = require('dotenv')
dotenv.config()

const API_PROTOCOL = process.env.API_PROTOCOL || 'http'
const API_HOSTNAME = process.env.API_HOSTNAME || 'localhost'
const API_PORT = process.env.API_PORT || 3001

module.exports = {
  /* APP */
  APP_NAME: process.env.APP_NAME || 'Dev App',
  APP_ZONE: process.env.APP_ZONE || 'development',
  APP_PORT: process.env.APP_PORT || 3000,
  
  /* API */
  API_PROTOCOL,
  API_HOSTNAME,
  API_PORT,
  API_URL: `${API_PROTOCOL}://${API_HOSTNAME}:${API_PORT}`
}