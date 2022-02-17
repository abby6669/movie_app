const res = require('express/lib/response');
//const jwt = require('jsonwebtoken');
const { CommentsModel } = require('../models');

// Marca error: CommentsModel is not defined
const createComment = async (req, res) => {

  const { body } = req
  try{
    const comment = await CommentsModel.create(body)
    if (comment) {
      res.status(201)
      res.send( 'Has creado un comentario', comment )}
    } catch (err) {
      return res
      .status(500)
      .send({ message: 'Error al crear comentario', error: err.message });
    }
  };



const readComment = async(req, res) => {
  const { id } = req.params
  try{
    const read = await CommentsModel.findOne(id)
    if (read) {
      res.status(201)
      res.send( ' Comentario leído', read )}
    } catch (err) {
      return res
      .status(500)
      .send({ message: 'Error al leer comentario', error: err.message });
    }
  };


const updateComment = async(req, res) => {
  const { body } = req;
  const { id } = req.params;

  try{
    const readUpdate = await CommentsModel.findByIdAndUpdate(id, body, { new: true })
    if (readUpdate) {
      res.status(201)
      res.send( ' Comentario actualizado', readUpdate )}
    } catch (err) {
      return res
      .status(400)
      .send({ message: 'Error al actualizar comentario', error: err.message });
    }
  };

const deleteComment = async(req, res) => {
  const { id } = req.params;
  try{
    const deleted = await CommentsModel.findByIdAndDelete(id)
    if (deleted) {
      res.status(201)
      res.send( )}
    } catch (err) {
      return res
      .status(400)
      .send({ message: 'Error al borrar comentario', error: err.message });
    }
}

module.exports = { readComment, createComment, updateComment, deleteComment }
