const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/user')
  .then(() => console.log('Connected!'));


  const schema = mongoose.Schema

  const userData = new schema({
   username: String,
  usermail: String,
  userage: Number
  }) 


  const model = mongoose.model('userData',userData)
  module.exports = model