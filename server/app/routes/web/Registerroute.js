let express = require('express')
const { registercontroller } = require('../../contoller/web/Registercontroller')
let register = express.Router()

register.post("/register", registercontroller)



module.exports = register;