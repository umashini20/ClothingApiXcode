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
    cid: {
      type: String,
      required: true
    },
    catname: {
      type: String,
      required: true
    },
    catimageUrl: {
      type: String,
      required: true
    }
  }
  
}
);



module.exports = mongoose.model('Product',productSchema)