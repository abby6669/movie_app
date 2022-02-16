const readComment = (req, res) => {
    res.status(200)
    res.send( 'Hola desde Delete Comentario!' )
}

// Marca error: CommentsModel is not defined
const createComment = async (req, res) => {
    const { name } = req.body;
    try{
      const comment = await CommentsModel.createComment(name)
      if (comment) {
      res.status(201)
      res.send( 'Has creado un comentario', comment )}
  } catch (err) {
    return res
      .status(500)
      .send({ message: 'Error al crear comentario', error: err.message });
  } 
};
  
const updateComment = (req, res) => {
    res.status(200)
    res.send( 'Hola desde Delete Comentario!' )
}

const deleteComment = (req, res) => {
    res.status(200)
    res.send( 'Hola desde Delete Comentario!' )
}

module.exports = { readComment, createComment, updateComment, deleteComment }