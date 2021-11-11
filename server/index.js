'use strict'
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./router.js');


app.use(cors())
   .use(router);

 app.listen(3001)
 console.log('Listening on 3001');
 

