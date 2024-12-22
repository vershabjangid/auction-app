let express = require('express');
let multer = require('multer');
let jwt = require('jsonwebtoken')
let path = require('path')
const { newauctioncontroller, viewnewauction, deleteauction, updateauction } = require('../../contoller/web/NewAuctioncontroller');
let newauction = express.Router();
let webkey = process.env.LOGINKEY



let verifytoken = (req, res, next) => {
    let token = req.headers['authorization']
    if (token) {
        jwt.verify(token, webkey, (err, valid) => {
            if (err) {
                res.send("please enter the valid token")
            }
            else {
                next();
            }
        })
    }
    else {
        res.send("please enter the token")
    }
}






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

const upload = multer({ storage: storage }).any('Auction_Logo')

newauction.post('/add-auction', verifytoken, upload, newauctioncontroller)
newauction.get('/view-auction',verifytoken, viewnewauction)
newauction.delete('/delete-auction', deleteauction)
newauction.put('/update-auction',upload, updateauction)

module.exports = newauction;    