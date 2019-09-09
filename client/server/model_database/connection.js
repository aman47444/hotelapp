var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const url = 'mongodb://localhost/mydb';
mongoose.connect(url,function(err,db){
    if(err) throw err;
    console.log('Databese se connect ho gya');
    // console.log(db);
})
require('./users.model');