const mongoose = require('mongoose');

//nota: cambio de 'mongodb://localhost:27017/cinema' a 'mongodb://mongo:27017/cinema'
const connectionString = 'mongodb://mongo:27017/cinema';

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;
