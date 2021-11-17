'use strict'
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./router.js');
const PORT = process.env.PORT || 3001;
const path = require('path');

app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(cors())
   .use(express.json())
   .use(router);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

 app.listen(PORT)
 console.log(`Listening on http://localhost:${PORT}`);
 

