let express = require('express')
const { Login, forgot_email } = require('../../contoller/web/Logincontroller')
let loginroute = express.Router()


loginroute.post('/login', Login)
loginroute.post('/forgot-email', forgot_email)
    

module.exports = loginroute