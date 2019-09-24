const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const db = require("./model/users.model");
global.bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require('bcrypt');
app.use(cors());
const jwt = require('jsonwebtoken');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const User = require("./model/users.model");
const bycrypt = require('bcrypt-nodejs');
const url = "mongodb://localhost/mydb";
const PORT = 8080;
mongoose.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log("Aman Bhai Databese se connect ho gya");
});
var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
app.post("/login", cors(corsOptions), function (req, res) {
    console.log("UI ka data", req.body);
    let username = req.body.email;
    let pass = req.body.password;
    User.find({ email: username }, (err, data) => {
        if (err) throw err;
        console.log('LoggedIn')
        // res.send(" Database wala data-> " + data);

        let l_data = JSON.stringify(data[2]);
        console.log(l_data);
        if (data.length) {
            jwt.sign(l_data, 'secertkey', (err, token) => {
                res.cookie('authorize', token, { httpOnly: true, secure: true });
                res.cookie('role', data[0].role, { httpOnly: true })
                res.cookie('jwt', token).send("Success");
            });
        }
        else {
            res.send("invalid user")
        }
    })
});
app.post('/signup', (req, res) => {
    console.log(req.body);
    const userData = {
        fname: req.body.fname,
        lname: req.body.lname,
        username: req.body.username,
        password: req.body.password
    }
    res.json({
        message:"signup is working......."
    })
})
app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Post created...',
                authData
            });
        }
    });
});
app.post('/api/login', (req, res) => {
    // Mock user
    const user = {
        id: 1,
        username: 'brad',
        email: 'brad@gmail.com'
    }

    jwt.sign({ user }, 'secretkey', { expiresIn: '30s' }, (err, token) => {
        res.json({
            token
        });
    });
});
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }

}

// app.post('/signup', (req, res) => {
//     const userData = {
//         fname: req.body.fname,
//         lname: req.body.lname,
//         username: req.body.username,
//         password: req.body.password
//     }
//     User.findOne({
//         username: req.body.username
//     })
//         .then((user) => {
//             if (!bycrypt) {
//                 bycrypt.hash(req.body.password, 10, (err, hash) => {
//                     userData.password = hash
//                     User.create(userData)
//                         .then((user) => {
//                             res.json({ status: user.username + 'resistered !' })
//                         })
//                         .catch(err => {
//                             res.send("error" + err)
//                         })
//                 })
//             }
//             else {
//                 res.json({ error: "user already exist " })
//             }
//         })
//         .catch(err => {
//             res.send("error" + err)
//         })
// });

app.listen(PORT, function () {
    console.log("Server will listen now " + PORT);
});