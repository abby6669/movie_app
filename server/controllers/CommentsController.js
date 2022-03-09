const res = require('express/lib/response');
//const jwt = require('jsonwebtoken');
const { CommentsModel } = require('../models');

const createComment = async (req, res) => {
  const { body } = req.body
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

const readComments = async (req, res) => {
  const { itemId } = req.params
  try {
    const comments = await CommentsModel.find({ itemId })
    return res.status(200).send({ message: 'Estos son los comentarios', comments })

  } catch (err) {
      return res
      .status(500)
      .send({ message: 'No es posible ver comentarios!', error: err.message });
  };
}

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

module.exports = { readComments, readComment, createComment, updateComment, deleteComment }