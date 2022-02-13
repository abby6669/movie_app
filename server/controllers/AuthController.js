const createUser = (req, res) => {
    res.status(200)
    res.send( 'Hola desde Crear Usuario' )
}

const loginUser = (req, res) => {
    res.status(200)
    res.send( 'Hola desde Login USER' )
}

const updateUser = (req, res) => {
    res.status(200)
    res.send( 'Hola desde Update user' )
}

const logoutUser = (req, res) => {
    res.status(200)
    res.send( 'Hola desde Logout user' )
}
 
module.exports = { createUser, loginUser, updateUser, logoutUser }


// const { AuthModel } = require('../models');

// const login = async (req, res) => {
//   // destructurar email y password
//   const { email, password } = req.body;
//   // si no existen, retornar y responder con mensaje de error
//   if (!email || !password) {
// // ya validado el email, comparar contraseñas
//     const validPassword = await user.comparePassword(password);
//     // // si no son iguales, retornar y responder con mensaje de error
//     if (!validPassword) {
//       return res.status(400).send({ message: 'User Denied.' });
//     }

//     // ya validado el password, crear token de autenticación
//     // const payload = {
//     //   id: user._id,
//     //   email: user.email
//     // };

// // Generamos un token con el payload y nuestro secreto
// // const token = jwt.sign(payload, SECRET, { expiresIn: '10m' });

// // return res.send({ message: 'Hola desde login!', token });
// // } catch (err) {
// // return res
// //   .status(400)
// //   .send({ message: 'Error al hacer login!', error: err.message });
//  }
//  };

// module.exports = {login};
