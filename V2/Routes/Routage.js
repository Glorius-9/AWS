const express = require('express');
const Router = express.Router();

const { Users } = require('../models/Users');

// Methode pour recuperer la base de données
Router.get('/', (req, res) => {
    Users.find((err, docs) => {
        if (!err) res.send(docs)
        else console("erreur " + err)
    })

})

Router.post('/', (req, res) => {
    const newRecord = new Users({
        Pseudo: req.body.Pseudo,
        Password: req.body.Password
    })
    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log("Erreur d'enregistrement " + err);
    })
})






Router.get('/', (req, res) => {
    res.sendFile("./index.html");
})


Router.get('/login', (req, res) => {
    res.sendFile("index.html")
})

Router.get('/inscription', (req, res) => {
    res.sendFile("inscription.html")
})

Router.get('/Parchemin', (req, res) => {
    res.sendFile("Parchemin.html")
})

Router.get('/ListeAmi', (req, res) => {
    res.sendFile("ListeAmi.html")
})

Router.get('/Lancement', (req, res) => {
    res.sendFile("Lancement.html")
})




module.exports = Router