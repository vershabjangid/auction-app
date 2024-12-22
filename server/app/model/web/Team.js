let mongoose = require('mongoose');


let teamschema = mongoose.Schema({
    Tournament_id: {
        type: String,
        required: true
    },
    Team_Logo: {
        type: String,
        required: true
    },
    Team_Name: {
        type: String,
        required: true
    },
    Team_Short_Name: {
        type: String,
        required: true
    },
    Team_Short_Key: {
        type: String,
        required: true
    },
    Team_Points: {
        type: Number,
        required: true
    },
    Team_Total_Player: {
        type: Number,
        required: true
    }
});


let teammodel = mongoose.model('teams', teamschema);
module.exports = teammodel;