const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
var userScheama = new Schema({
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    id:{
        type:Number
    }
})
const Users = mongoose.model('User',userScheama);
module.exports = Users;