const express = require('express');
const app = express();
const mongoose = require("mongoose");
const db = require("./model_database/users.models");
global.bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./model/users.model");
const PORT = 8080;
app.get('', function (req, res) {
    res.send("Hello bhai Santosh");
})
app.listen(PORT, function () {
    console.log("Server will listen now " + PORT);
});