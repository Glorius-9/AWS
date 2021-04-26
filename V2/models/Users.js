const mongoose = require("mongoose");

const Users = mongoose.model(
    "ProjetAWS", {
        Pseudo: {
            type: String,
            require: true
        },
        Password: {
            type: String,
            require: true
        }
    },
    "Users"
);

module.exports = { Users }