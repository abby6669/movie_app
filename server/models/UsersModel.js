const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

// PRODUCT SCHEMA
const userSchema = new Schema({
  name: {
    type: String,
    required: false
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

userSchema.pre('save', function(next) {
  const user = this;
  const hashedPassword = bcrypt.hashSync(user.password, 10);
  user.password = hashedPassword;
  next();
});

userSchema.method('comparePassword', function(password) {
  const user = this;
  return bcrypt.compareSync(password, user.password);
});

// CREANDO EL MODELO CON BASE AL SCHEMA CREADO
const UsersModel = mongoose.model('UserModel', userSchema);

// EXPORTAR MODELO PARA SU USO
module.exports = UsersModel;
