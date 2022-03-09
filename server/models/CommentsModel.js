const mongoose = require('mongoose');
const { Schema } = mongoose;

// Revisar propiedades de Schema
// PRODUCT SCHEMA
const commentSchema = new Schema({
  itemId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// CREANDO EL MODELO CON BASE AL SCHEMA CREADO
const CommentsModel = mongoose.model('CommentsModel', commentSchema);

// EXPORTAR MODELO PARA SU USO
module.exports = CommentsModel;
