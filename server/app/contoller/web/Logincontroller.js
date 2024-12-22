const { registercontroller } = require("./Registercontroller")
let jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer");
let mongoose = require('mongoose')
const registermodel = require("../../model/web/Register")
require('dotenv').config()
let Loginkey = process.env.LOGINKEY




const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "bansiitsolutions@gmail.com",
        pass: "iseagoqqucyooauc",
    },
});





exports.Login = async (req, res) => {
    let data = {
        Phone: req.body.Phone,
        Password: req.body.Password
    }

    let viewdata = await registermodel.find(data)

    if (viewdata.length == 0) {
        res.send({
            Status: 0,
            Message: "Incorrect phone or password"
        })
    }
    else {
        let newtoken;
        jwt.sign({ newtoken }, Loginkey, (error, value) => {
            if (!error) {
                res.send({
                    viewdata,
                    token: value
                })
            }
            else {
                res.send({
                    Status: 0,
                    Message: "Data Missing"
                })
            }
        })
    }

}



exports.forgot_email = async (req, res) => {
    let data = {
        Email: req.body.Email,
    }

    let viewdata = await registermodel.find(data)

    if (viewdata.length == 0) {
        res.send({
            Status: 0,
            Message: "Incorrect email or password"
        })
    }
    else {

        const info = await transporter.sendMail({
            from: '"Bansi IT Solutions" <maddison53@ethereal.email>', // sender address
            to: `${viewdata[0].Email}`, // list of receivers
            subject: "Auction app password", // Subject line
            text: "Your Password Recovery Details Are Here", // plain text body
            html: `Subject: Your Account Password
                       <br/>
                       <br/>

                       Dear ${viewdata[0].Name},
                       <br/>
                       <br/>
                       As requested, here is the password associated with your account:
                       <br/>
                       <br/>
                       Your Password is : ${viewdata[0].Password}
                       <br/>
                       <br/>
                       We recommend keeping this password secure and not sharing it with anyone. If you didn’t request this information or suspect unauthorized access to your account, please update your password immediately.
                       <br/>
                       <br/>
                       Thank you,
                       <br/>
                       <br/>
                       Bansi IT Solutions`, // html body
        });

        if (info.accepted != []) {
            res.send({
                Status: 1,
                Message: "Mail Sended Successfully"
            })
        }
        else {
            res.send({
                Status: 0,
                Message: "Data Missing"
            })
        }
    }
}