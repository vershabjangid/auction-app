let path = require('path')
let fs = require('fs')
let dirpath = path.join(__dirname, '../../../uploads')
const teammodel = require("../../model/web/Team")

exports.addteamcontroller = async (req, res) => {
    let data = {
        Tournament_id: req.body.Tournament_id,
        Team_Logo: req.files[0].filename,
        Team_Name: req.body.Team_Name,
        Team_Short_Name: req.body.Team_Short_Name,
        Team_Short_Key: req.body.Team_Short_Key,
        Team_Points : req.body.Team_Points,
        Team_Total_Player : req.body.Team_Total_Player
    }

    let insertteam = await teammodel(data);
    insertteam.save()
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
                    Message: "Data Already Inserted"
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

exports.viewteamcontroller = async (req, res) => {
    let viewdata = await teammodel.find()
    let imgurl = "http://localhost:5000/uploads/"
    res.send({
        viewdata,
        imgurl
    })
}



exports.updateteamcontroller = async (req, res) => {

    let insertteam = await teammodel.updateOne({ _id: req.body._id }, {
        Team_Name: req.body.Team_Name,
        Team_Short_Name: req.body.Team_Short_Name,
        Team_Short_Key: req.body.Team_Short_Key
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
                    Message: "Data Already Inserted"
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


exports.deleteteamcontroller = async (req, res) => {
    let data = {
        _id: req.body._id,
    }
    let unlink = fs.unlinkSync(`${dirpath}/${req.body.Team_Logo}`)
    let deleteauction = await teammodel.deleteOne({ _id: data._id })
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