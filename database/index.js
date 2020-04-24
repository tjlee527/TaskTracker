const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/CoronaInspo', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose connected successfully');
});

const itemSchema = new mongoose.Schema({
  text: String,
  id: String,
  complete: Boolean
});

const Items = mongoose.model('Item', itemSchema);

module.exports = Items;
