const registermodel = require("../../model/web/Register")

exports.registercontroller = async (req, res) => {


    let data = {
        Name: req.body.Name,
        City: req.body.City,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Password: req.body.Password
    }

    let insertdata = await registermodel(data)
    insertdata.save()
        .then(() => {
            res.send({
                Status: 1,
                Message: "Data Inserted Successfully"
            })
        })
        .catch((error) => {
            if (error.code == 11000) {
                res.send({
                    Status: 0,
                    Message: "Data Already Exists"
                })
            }
            else {
                res.send({
                    Status: 0,
                    Message: "Data missing"
                })
            }
        })
}