let mongoose = require('mongoose')


let registerschema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Phone: {
        type: Number,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    }
})


let registermodel = mongoose.model('new-users', registerschema)
module.exports = registermodel