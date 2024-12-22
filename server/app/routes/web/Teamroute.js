let express = require('express');
let multer = require('multer');
let jwt = require('jsonwebtoken')
let path = require('path');
const { addteamcontroller, viewteamcontroller, updateteamcontroller, deleteteamcontroller } = require('../../contoller/web/Teamcontrollet');
let team = express.Router();
let webkey = process.env.LOGINKEY



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniquesuffix = Date.now() + '_' + Math.round(Math.random() * 1E9)
        const extension = path.extname(file.originalname)
        const filename = 'file' + uniquesuffix + extension
        cb(null, filename)
    }
})

const upload = multer({ storage: storage }).any('Auction_Logo', 'Team_Logo')

team.post('/add-team', upload, addteamcontroller)
team.get('/view-team', viewteamcontroller)
team.put('/update-team', updateteamcontroller)
team.delete('/delete-team', deleteteamcontroller)

module.exports = team;