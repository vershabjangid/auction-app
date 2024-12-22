let express = require('express')
let cors = require('cors')
const { mongoose } = require('mongoose');
const allroutes = require('./app/allroutes');
let app = express()

app.use('/uploads', express.static('uploads'))
app.use(cors())
app.use(express.json())
app.use(allroutes)


mongoose.connect('mongodb://127.0.0.1:27017/auction')
    .then(() => {
        app.listen('5000')
    })