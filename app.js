//start
//Dependecies
const express = require(`express`);
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Configuration
require("dotenv").config();

//Database
const URI = process.env.MONGO_URI;
mongoose.connect(URI);

//Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//Controller indices
const controller1 = require("./Control/controller1");
app.use(`/data`, controller1);

//landing Route
app.get(`/`, (req, res) => {
    // res.send(`landing index`)
    res.render(`./Land/land.ejs`, {})
})

//Listener
app.listen(3000, () => {
    console.log('express is online and running')
})
//end