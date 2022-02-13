const mongoose = require('mongoose');
const { Schema } = mongoose;
const db = require('../db');

// AUTH SCHEMA
const authSchema = new Schema({
    email: {
      type: String,
      required: true
    },
    password: {
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
    }
  });


  // CREANDO EL MODELO CON BASE AL SCHEMA CREADO
const AuthModel = mongoose.model('authModel', authSchema);

// EXPORTAR MODELO PARA SU USO
module.exports = AuthModel;