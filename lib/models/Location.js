const mongoose = require ('mongoose');

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
  }
},
{
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
    }
  }
});

module.exports = mongoose.model('Location', locationSchema);
