const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  pseudo: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
}, {
    collection: 'users',
  })

module.exports = mongoose.model('Users', UserSchema)