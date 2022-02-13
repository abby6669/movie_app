const createWatched = (req, res) => {
    res.status(200)
    res.send( 'Hola desde Crear Película Vista' )
}

const deleteWatched = (req, res) => {
    res.status(200)
    res.send( 'Hola desde Delete Película Vista' )
}

module.exports = { createWatched, deleteWatched }
