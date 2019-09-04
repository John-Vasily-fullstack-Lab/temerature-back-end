const mongoose = require ('mongoose');


const temperatureSchema = new mongoose.Schema({
  temperature: {
    type: Number,
    required: true
  }
},
{
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
    }
  }
});

module.exports = mongoose.model('Temperature', temperatureSchema);

