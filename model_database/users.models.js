const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
var userScheama = new Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    id:{
        type:Number
    }
})
const User = mongoose.model('User',userScheama);
module.exports = User;