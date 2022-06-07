const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
  title: String,
  image: String,
  price: Number,
  description: {
    type: String,
    trim: true,
  },
  location: String,
});

module.exports = mongoose.model('Campground', CampgroundSchema);
