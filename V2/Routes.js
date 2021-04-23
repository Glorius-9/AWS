const express = require('express')
var app = express();


app.get('/', (req, res) => {
    res.sendFile("Profil.html")
})


app.get('/login', (req, res) => {
    res.sendFile("index.html")
})

app.get('/inscription', (req, res) => {
    res.sendFile("inscription.html")
})

app.get('/Parchemin', (req, res) => {
    res.sendFile("Parchemin.html")
})

app.get('/ListeAmi', (req, res) => {
    res.sendFile("ListeAmi.html")
})

app.get('/Lancement', (req, res) => {
    res.sendFile("Lancement.html")
})