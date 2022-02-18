const res = require('express/lib/response');
const jwt = require('jsonwebtoken');
const { UsersModel } = require('../models');
const SECRET = process.env.SECRET || 'secretomaximo';

const create = async (req, res) => {
    const { email, password } = req.body;
    // si no existen, retornar y responder con mensaje de error
    if (!email || !password) {
      return res.status(400).send({ message: 'Ingresa email y password' });
    }

    try {
      // buscar email en base de datos para validar que existe
      const emailExists = await UsersModel.findOne({ email });
      // // si ya existe, retornar y responder con mensaje de error
      if (emailExists) {
        return res
          .status(400)
          .send({ message: 'Ya existe un usuario con ese correo' });
      }

      // ya validado el email, crear usuario y responder
      const newBody = { email, password };
      const newUser = await UsersModel.create(newBody);
      return res.status(201).send({ message: 'Usuario creado!', user: newUser });
    } catch (err) {
      return res
        .status(500)
        .send({ message: 'Error creando usuario!', error: err.message });
    }
};

const findAll = async (req, res) => {
    try{
        const users = await UsersModel.findAll()
        return res.status(200).send({ message: 'Lista de usuarios!', users });
    }
    catch (err) {
        return res
        .status(500)
        .send({ message: 'Error al traer usuarios!', error: err.message });
    };
};

const findById = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await UsersModel.findById(id)
        if (!user) {
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
        return res.status(200).send({ message: 'Usuario encontrado!', user });
    } catch (err) {
        return res
          .status(500)
          .send({ message: 'Error al traer usuario!', error: err.message });
    };
}
// No SALE REVISAAAAR!!!
const findByIdAndUpdate = async (req, res) => {
    try{
        const { id } = req.params;
        const updatedUser = await UsersModel.findByIdAndUpdate(id)
        if (!updatedUser || !id) {
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
        return res.status(200).send({ message: 'Usuario actualizado!', updatedUser });
    } catch (err) {
        return res
            .status(500)
            .send({ message: 'Error al actualizar usuario!', error: err.message });
    };
}

const findByIdAndDelete = async (req, res) => {
    try{
        const { id } = req.params;
        const deleteUser = await UsersModel.findByIdAndDelete(id)
        if (!id){
            return res.status(400).send({ message: 'Error borrando producto!', error: err.message });
        }
        return res.status(204).send();
    } catch (err) {
        return res
            .status(500)
            .send({ message: 'Error al borrar usuario!', error: err.message })
    };
}

const login = async (req, res) => {

    // // Desestructurar propiedades email y password del body y validar que existan
     const { email, password } = req.body;
     if (!email || !password) {
        return res.status(400).send({ message: 'Ingresa un email y password' });
     }

     try {
    //     // Buscar al usuario por su email en la base de datos y validar que exista
         const user = await UsersModel.findOne({email})
          if (!user) {
            return res.status(400).send({ message: 'Usuario no existe.'})
       }

    //     // Comparar password proporcionado con el almacenado en la base de datos y validar que la comparación sea verdadera
         const validPassword = await user.comparePassword(password);
         if (!validPassword) {
            return res.status(400).send({ message: 'Usuario denegado' });
        }

        // ya validado el password, crear token de autenticación
         const payload = {
         id: user.id,
         email: user.email
         };

        // const payload = {
        // id: '123',
        // email: 'hola@gmail.com'
        // };

        // Generamos un token con el payload y nuestro secreto
        const token = jwt.sign(payload, SECRET, { expiresIn: '10m' });

        return res.send({ message: 'Loggeado!', token });
          } catch (err) {
              return res
                  .status(400)
                  .send({ message: 'Error al hacer login!', error: err.message });
          }
};

module.exports = { create, findAll, findById, findByIdAndUpdate, findByIdAndDelete, login }
