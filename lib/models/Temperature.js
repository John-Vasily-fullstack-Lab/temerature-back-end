const mongoose = require ('mongoose');


const temperatureSchema = new mongoose.Schema({
  temperature: {
    type: Number,
    required: true
  },
  locationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
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

