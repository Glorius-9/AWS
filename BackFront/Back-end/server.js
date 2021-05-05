const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db= "mongodb+srv://Rambel:007@cluster0.dbzfo.mongodb.net/Glorius9DataBase?retryWrites=true&w=majority"
const port = 3000
const joueurShema = new mongoose.Schema({
  pseudo :{
    type : String,
    required : true

  }
})
mongoose.connect(db,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>console.log('connection BD'))

app.get('/', (req, res) => {
  res.send('<p> <a href="/AfficheJoueurs">AfficheJoueurs</a></p>')


})

const Joueur = mongoose.model("Joueur",joueurShema)
app.get('/AfficheJoueurs', (req, res) => {
    Joueur.find({},(err,jrs)=>{
      if(!err){
        res.send(jrs)
        console.log(jrs)
      }
    })

  })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/*async function run(client,jr) {
  try {
    await client.connect();

    const database = client.db('Glorius9DataBase');
    const joueurCollection = database.collection('Joueur');

    // Rechercher le document avec le pseudo Rambel
    const requete = { pseudo: 'Rambel' };
    let joueur = await joueurCollection.findOne(requete);
    console.log(joueur);
  } finally {
    // Ensures that the client will close when you finish/error
    console.log('récupration des données')
    
    await client.close();
  }
   const { MongoClient } = require("mongodb");
  const uri ="mongodb+srv://Rambel:007@cluster0.dbzfo.mongodb.net/Glorius9DataBase?retryWrites=true&w=majority"
  const client = new MongoClient(uri, {useNewUrlParser: true,useUnifiedTopology: true,});
  run(client);
} */

//cluster0-shard-00-02.dbzfo.mongodb.net:27017
