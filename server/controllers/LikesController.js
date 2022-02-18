const res = require('express/lib/response');
//const jwt = require('jsonwebtoken');
const { LikesModel } = require('../models');

// Revisar función
const createLike = async (req, res) => {
    const { itemId, userId, poster_path, title } = req.body
    if (!itemId || !userId || !poster_path || !title) {
        return res.status(400).send({ message: 'Para dar like necesitas un itemId, userId, poster_path y title' });
    }
    try {
      const likeExists = await LikesModel.findOne({userId, itemId})
      if (likeExists){
        return res.status(400).send({ message: 'Este like ya existe!'})
      }
      const newBody = { itemId, userId, poster_path, title }
      const newLike = await LikesModel.create(newBody)
      if (!newLike) {
        return res.status(400).send({ message: 'Error creando like' })
      }
      return res.status(201).send({ message: 'ok!', like: newLike })

    } catch (err) {
        return res
        .status(500)
        .send({ message: 'No es posible dar like!', error: err.message });
    };
}

const getLikes = async (req, res) => {
  const { userId } = req.params
  try {
    const likes = await LikesModel.find({userId})
    return res.status(200).send({ message: 'ok!', likes })

  } catch (err) {
      return res
      .status(500)
      .send({ message: 'No es posible dar like!', error: err.message });
  };
}

const deleteLike = async (req, res) => {
      const { itemId } = req.body
      if (!itemId) {
          return res.status(400).send({ message: 'No se pudo borrar' });
      }
      try {
        const body = { itemId };
        const dislikeMovie = await LikesModel.deleteOne(itemId)
        if (likeMovie) {
          return res.status(201)
        }
      } catch (err) {
          return res
          .status(500)
          .send({ message: 'No pudiste borrarlo, chato', error: err.message });
      };
}

module.exports = { createLike, getLikes, deleteLike }
