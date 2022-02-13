const mongoose = require('../db');
const { Schema } = mongoose;

// PRODUCT SCHEMA
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  imgUrl: {
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
const UsersModel = mongoose.model('UserModel', userSchema);

// EXPORTAR MODELO PARA SU USO
module.exports = UsersModel;