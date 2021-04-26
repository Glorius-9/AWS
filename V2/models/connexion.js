var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ProjetAWS", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,

}).then(() => {
    console.log('connexion à la base de donnee reussie!!!');
}).catch((e) => {
    console.log('Erreur de connexion à la base de donnee!!!');
});