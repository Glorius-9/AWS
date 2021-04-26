const bodyParser = require('body-parser');
const express = require('express')
const path = require("path");
var app = express();

require("./models/connexion");
const RouteP = require('./Routes/Routage');

app.use(bodyParser.json());
app.use('/', RouteP);


const static_path = path.join(__dirname, "/Public");
app.use(express.static(static_path));


app.listen('3000', () => {
    console.log('Serveur est lancé sur le port 3000')
})