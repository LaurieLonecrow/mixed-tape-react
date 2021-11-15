'use strict'
const Track = require('../models/tracks.js');

const getText = async (req, res) => {
    try {
      const body = await Track.find({});
      res.status(200).send(body);
    } catch (err) {
      console.log(err, 'error at Get')
      res.status(500);
    }
  };
  
  const postText = async (req, res) => {
    try {
      const text = await Track.create(req.body)
      res.status(201).send(text);
    } catch (err) {
      console.log(err, 'error at Post')
      res.sendStatus(400);
    }
  };

  module.exports = { getText, postText };
