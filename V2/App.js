const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser')
var app = express();
const path = require("path");



require("./models/connexion");
const RouteP = require('./Routes/Routage');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

//app.use(express.urlencoded({ extened: true }));  randomStringASyoulikehjudfsajk
app.use(express.static("views"));
app.set("view engine", "ejs");


app.use(
    cookieSession({
        keys: ["glorius"],
    })
);
app.use('/', RouteP);







app.listen('3000', () => {
    console.log('Serveur est lancé sur le port 3000')
})