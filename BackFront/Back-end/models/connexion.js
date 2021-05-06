var mongoose = require('mongoose');


//mongodb://localhost:27017/ProjetAWS
mongoose.connect("mongodb+srv://Rambel:007@cluster0.dbzfo.mongodb.net/Glorius9DataBase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true

}).then(() => {
    console.log('connexion à la base de donnee reussie!!!');
}).catch((e) => {
    console.log('Erreur de connexion à la base de donnee!!!');
});