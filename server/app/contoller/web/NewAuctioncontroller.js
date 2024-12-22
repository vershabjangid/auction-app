let path = require('path')
let fs = require('fs')
let dirpath = path.join(__dirname, '../../../uploads')
const newauctionmodel = require("../../model/web/NewAuction")

exports.newauctioncontroller = async (req, res) => {

    let data = {
        User_id: req.body.User_id,
        Auction_Logo: req.files[0].filename,
        Sports_Type: req.body.Sports_Type,
        Sports_Season: req.body.Sports_Season,
        Auction_Date: req.body.Auction_Date,
        Auction_Name: req.body.Auction_Name,
        Points_Per_Team: req.body.Points_Per_Team,
        Base_Bid: req.body.Base_Bid,
        Bid_Increased_By: req.body.Bid_Increased_By,
        Player_Per_Team: req.body.Player_Per_Team,
        Privacy: req.body.Privacy,
        Time: req.body.Time
    }


    let insertdata = await newauctionmodel(data)
    insertdata.save()
        .then(() => {
            res.send({
                Status: 1,
                Message: "Data Inserted Successfully"
            })
        })
        .catch((error) => {
            if (error.code == 11000) {
                res.status(400).send({
                    Status: 0,
                    Message: "Data already exists"
                })
            }
            else {
                res.status(400).send({
                    Status: 0,
                    Message: "Data Missing"
                })
            }
        })
}


exports.viewnewauction = async (req, res) => {
    let viewauction = await newauctionmodel.find()
    let imgurl = "http://localhost:5000/uploads/"
    res.send({
        viewauction,
        imgurl
    })
}

exports.deleteauction = async (req, res) => {
    let data = {
        _id: req.body._id,
    }
    console.log(req.body)
    let fileunlink = fs.unlinkSync(`${dirpath}/${req.body.Auction_Logo}`)
    let deleteauction = await newauctionmodel.deleteOne({ _id: data._id })
        .then(() => {
            res.send({
                Status: 1,
                Message: "Data Deleted Successfully"
            })
        })
        .catch((error) => {
            res.status(400).send({
                Status: 0,
                Message: "Data Missing"
            })
        })
}



exports.updateauction = async (req, res) => {
    console.log(req.body)

    let updateauction = await newauctionmodel.updateOne({ _id: req.body._id },
        {
            Sports_Type: req.body.Sports_Type,
            Sports_Season: req.body.Sports_Season,
            Auction_Date: req.body.Auction_Date,
            Auction_Name: req.body.Auction_Name,
            Points_Per_Team: req.body.Points_Per_Team,
            Base_Bid: req.body.Base_Bid,
            Bid_Increased_By: req.body.Bid_Increased_By,
            Player_Per_Team: req.body.Player_Per_Team,
            Privacy: req.body.Privacy,
            Time: req.body.Time
        })
        .then(() => {
            res.send({
                Status: 1,
                Message: "Data Updated Successfully"
            })
        })
        .catch((error) => {
            if (error.code == 11000) {
                res.status(400).send({
                    Status: 0,
                    Message: "Data already exists"
                })
            }
            else {
                res.status(400).send({
                    Status: 0,
                    Message: "Data Missing"
                })
            }
        })
}