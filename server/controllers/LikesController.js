const createLike = (req, res) => {
    res.status(200)
    res.send( 'Hola desde Crear Like' )
}

const deleteLike = (req, res) => {
    res.status(200)
    res.send( 'Hola desde Delete Like' )
}

module.exports = { createLike, deleteLike }
