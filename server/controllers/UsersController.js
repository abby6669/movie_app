const getAllUsers = (req, res) => {
    res.status(200)
    res.send( 'Hola desde GET ALL USERS !!!' )
}

module.exports = { getAllUsers }