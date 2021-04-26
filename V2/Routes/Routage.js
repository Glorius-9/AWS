const express = require('express');
const Router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { Users } = require('../models/Users');


// Methode pour recuperer les elements d'une table de la base de données
Router.get('/', (req, res) => {
    Users.find((err, docs) => {
        if (!err) res.send(docs)
        else console("erreur " + err)
    })

})

//Methode pour Enregistrer nouveau element
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

// Fonction pour la modification
Router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID non reconnu")

    const UpdateRecorder = {
        Pseudo: req.params.Pseudo,
        Password: req.params.Password
    };

    Users.findByIdAndUpdate(
        req.params.id, { $set: UpdateRecorder }, { new: true },
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("erreur lors de modification");
        }
    )
})


// Fonction pour la suppression

Router.delete("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID non reconnu")

    Users.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log("erreur de suppression")
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