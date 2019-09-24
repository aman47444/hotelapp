const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
var userScheama = new Schema({
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    username:{
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
const User = mongoose.model('User',userScheama);
module.exports = User;