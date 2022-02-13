const createComment = (req, res) => {
    res.status(200)
    res.send( 'Hola desde Crear Comentario!' )
}

const deleteComment = (req, res) => {
    res.status(200)
    res.send( 'Hola desde Delete Comentario!' )
}

module.exports = { createComment, deleteComment }