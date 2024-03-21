const mongoose = require('mongoose');
const { Schema } = mongoose;

const bestSellerProductSchema = new Schema({
  name: {
    type: String,
    require: true
  }, 
  imageUrl: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  description: String
  
}
);



module.exports = mongoose.model('BestSellerProducts',bestSellerProductSchema)