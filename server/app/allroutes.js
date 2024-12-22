let express = require('express')
const register = require('./routes/web/Registerroute')
const loginroute = require('./routes/web/Loginroute')
const newauction = require('./routes/web/Newauctionroute')
const team = require('./routes/web/Teamroute')
let allroutes = express.Router()

allroutes.use(register)
allroutes.use(loginroute)
allroutes.use(newauction)
allroutes.use(team)

module.exports = allroutes;