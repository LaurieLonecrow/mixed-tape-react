const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://emilyhpark:Pa$$w0rd@cluster0.jd1zv.mongodb.net/events_db',
{ useNewUrlParser: true, useUnifiedTopology: true },
(err) => {
    if (err) {
      console.log(`Something went wrong! ${err}`); 
    } else {
      console.log(`Database connected!`);
    }
  });

module.exports = mongoose;