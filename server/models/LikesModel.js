const mongoose = require('mongoose');
const { Schema } = mongoose;

// Revisar propiedades de esquema

// PRODUCT SCHEMA
const likeSchema = new Schema({
    createdAt: {
      type: Date,
      default: Date.now
    },
    itemId: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    poster_path: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
);

// CREANDO EL MODELO CON BASE AL SCHEMA CREADO
const LikesModel = mongoose.model('LikesModel', likeSchema);

// EXPORTAR MODELO PARA SU USO
module.exports = LikesModel;