let mongoose = require('mongoose')

let newauction = mongoose.Schema({

    User_id: {
        type: String,
        required: true
    },
    Auction_Logo: {
        type: String,
        required: true
    },
    Sports_Type: {
        type: String,
        required: true
    },
    Sports_Season: {
        type: Number,
        required: true
    },
    Auction_Date: {
        type: String,
        required: true
    },
    Auction_Name: {
        type: String,
        required: true
    },
    Points_Per_Team: {
        type: Number,
        required: true
    },
    Base_Bid: {
        type: Number,
        required: true
    },
    Bid_Increased_By: {
        type: Number,
        required: true
    },
    Player_Per_Team: {
        type: Number,
        required: true
    },
    Privacy: {
        type: String,
        required: true
    },
    Time: {
        type: String,
        required: true
    }
})


let newauctionmodel = mongoose.model('new-auctions', newauction)
module.exports = newauctionmodel;