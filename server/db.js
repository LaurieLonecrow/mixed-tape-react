const mongoose = require('mongoose');

mongoose.connect(
  // `mongodb://localhost:27017/mixedTape`, 
  process.env.MONGODB_URI,
{ useNewUrlParser: true, useUnifiedTopology: true },
(err) => {
    if (err) {
      console.log(`Something went wrong! ${err}`); 
    } else {
      console.log(`Database connected!`);
    }
  });

module.exports = mongoose;