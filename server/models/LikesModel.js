const mongoose = require('mongoose');
const { Schema } = mongoose;

// Revisar propiedades de esquema

// PRODUCT SCHEMA
const likeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now

  },
  itemId: {
    type: Number,
    required: true,
    default:0
  },

  }
);

// CREANDO EL MODELO CON BASE AL SCHEMA CREADO
const LikesModel = mongoose.model('LikesModel', likeSchema);

// EXPORTAR MODELO PARA SU USO
module.exports = LikesModel;
