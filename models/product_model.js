const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
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
  description: String,

  category: {
     type: String,
     require: true
  }
  
}
);



module.exports = mongoose.model('Product',productSchema)