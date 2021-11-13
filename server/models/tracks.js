'use strict';

const mongoose = require('../db');

const Schema = mongoose.Schema;

const trackSchema = new Schema({
  trackId: String,
  content: String,
  
});

const Track = mongoose.model('Track', trackSchema);


module.exports = Track;