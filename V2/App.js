const express = require('express')
const path = require("path");
var app = express();

require("./connexion");
//require("./Routes")


const static_path = path.join(__dirname, "/Public");
app.use(express.static(static_path));
app.set("Views engine", "ejs");


app.listen('3000', () => {
    console.log('Serveur est lancé sur le port 3000')
})