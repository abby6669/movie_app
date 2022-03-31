const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

// PRODUCT SCHEMA
const watchedSchema = new Schema({
  name: {
    type: String,
    required: false
  },

  imgUrl: {
    type: String,
    required: false
  },

  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

});



// CREANDO EL MODELO CON BASE AL SCHEMA CREADO
const WatchedModel = mongoose.model('WatchedModel', watchedSchema);

// EXPORTAR MODELO PARA SU USO
module.exports = WatchedModel;
