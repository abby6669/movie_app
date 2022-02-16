// Revisar función
const createLike = async (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).send({ message: 'Ingresa nombre' });
    }
    //const contador=0
    try {
      const likeMovie = await LikesModel.createLike(name)
      if (likeMovie) {
        return res.status(201).send({ message: 'ok!', likeMovie})
      }
    } catch (err) {
        return res
        .status(500)
        .send({ message: 'No es posible votar ahora!', error: err.message });
    };
}

const deleteLike = async (req, res) => {
    const { id } = req.body
    try {
      const deletelikeMovie = await UsersModel.deleteLike(id)
      if (deleteLike) {
        return res.status(200).send()
      }
    } catch (err) {
        return res
        .status(500)
        .send({ message: 'Error!', error: err.message });
    };
}
  

module.exports = { createLike, deleteLike }
