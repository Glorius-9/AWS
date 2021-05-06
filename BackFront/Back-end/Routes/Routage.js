const express = require("express");
const bcrypt = require("bcrypt");
const Router = express.Router();
var app = express();

const User = require('../models/Users');
const authenticateUser = require("../middlewares/authenticateUser");

app.use(express.static("../Public"));
app.set("view engine", "ejs");

// route get
Router
    .get("/", (req, res) => {
        res.render("index");
    })
    .get("/login", (req, res) => {
        res.render("login");
    })
    .get("/register", (req, res) => {
        res.render("Register");
    })
    .get("/profil", (req, res) => {
        res.render("profil");
    })
    .get("/MarketPlace", (req, res) => {
        res.render("MarketPlace");
    })
    .get("/ModifierI", (req, res) => {
        res.render("ModifierI");
    })
    .get("/ListeAmi", (req, res) => {
        res.render("ListeAmi");
    })
    .get("/Lancement", (req, res) => {
        res.render("Lancement");
    })



.get("/", authenticateUser, (req, res) => {
    res.render("/", { User: req.session.User });
});

Router.post("/register", async(req, res) => {
    const { pseudo, email, password } = req.body;

    // check for missing filds
    if (!pseudo || !email || !password) {
        res.send("remplir tous les champs");
        return;
    }

    const doesUserExitsAlreay = await User.findOne({ email });

    if (doesUserExitsAlreay) {
        res.send("l'utilisateur existe deja!");
        return;
    }

    // l hasher le  password
    const hashedPassword = await bcrypt.hash(password, 12);
    const nouveau = new User({ pseudo, email, password: hashedPassword });
    console.log(nouveau);
    nouveau
        .save()
        .then(() => {
            res.redirect('/login');
            return;
        })
        .catch((err) => console.log(err));
});


Router.post("/login", async(req, res) => {
    const { pseudo, password } = req.body;

    if (!pseudo || !password) {
        res.send("veillez remplir les champs!");
        return;
    }

    const UserExits = await User.findOne({ pseudo });

    if (!UserExits) {
        res.send("pass ou pseudo incorrect!");
        return;
    }

    const doesPasswordMatch = await bcrypt.compare(
        password,
        UserExits.password
    );

    if (!doesPasswordMatch) {
        res.send("pass ou pseudo incorrect!");
        return;
    }

    req.session.user = {
        pseudo,
    };
    res.redirect("/profil");

    //res.render("profil")
})


//Deconnexion
Router.get("/logout", authenticateUser, (req, res) => {
    req.session.user = null;
    res.redirect("/login");
});


module.exports = Router