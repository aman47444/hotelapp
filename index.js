const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const db = require("./model/users.model");
global.bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const User = require("./model/users.model");
const url = "mongodb://localhost/mydb";
const PORT = 8080;
mongoose.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log("Databese se connect ho gya");
    // console.log(db);
});
app.post("/login", function (req, res) {
    console.log(req.body);
    let email = req.body.username;
    User.findOne({ username: email }, (err, data) => {
        if (err) throw err;
        console.log('LoggedIn')
        res.send(" data is " + data);
    });
});
app.listen(PORT, function () {
    console.log("Server will listen now " + PORT);
});