const mongoose = require('mongoose');
const moment = require('moment');

const schema = new mongoose.Schema({
  title: { type: String },
  labels: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Label' }],
  content: { type: String },
  img: { type: String },
  time: { type: String, default: () => moment(new Date()).format('YYYY-MM-DD HH:mm:ss') }
})

module.exports = mongoose.model('Article', schema);