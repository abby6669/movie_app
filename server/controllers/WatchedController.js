const res = require('express/lib/response');
//const jwt = require('jsonwebtoken');
const { WatchedModel } = require('../models');

const createWatched = async (req, res) => {

  const { body } = req
  try{
    const newWatched = await WatchedModel.create(body)
    if (newWatched) {
      res.status(201)
      res.send( 'Has creado un comentario', newWatched )}
    } catch (err) {
      return res
      .status(500)
      .send({ message: 'Error al crear comentario', error: err.message });
    }
  };

const readOneWatch = async(req, res) => {
  const { id } = req.params
  try{
    const seeWatch = await WatchedModel.findOne(id)
    if (seeWatch) {
      res.status(201)
      res.send( ' Comentario leído', seeWatch )}
    } catch (err) {
      return res
      .status(500)
      .send({ message: 'Error al leer comentario', error: err.message });
    }
  };

const updateWatch = async(req, res) => {
  const { body } = req;
  const { id } = req.params;

  try{
    const watchUpdate = await WatchedModel.findByIdAndUpdate(id, body, { new: true })
    if (watchUpdate) {
      res.status(201)
      res.send( ' Comentario actualizado', watchUpdate )}
    } catch (err) {
      return res
      .status(400)
      .send({ message: 'Error al actualizar comentario', error: err.message });
    }
  };

const deleteWatched = async(req, res) => {
  const { id } = req.params;
  try{
    const deleted = await WatchedModel.findByIdAndDelete(id)
    if (deleted) {
      res.status(201)
      res.send( )}
    } catch (err) {
      return res
      .status(400)
      .send({ message: 'Error al borrar comentario', error: err.message });
    }
}

module.exports = { createWatched, readOneWatch, updateWatch, deleteWatched }
