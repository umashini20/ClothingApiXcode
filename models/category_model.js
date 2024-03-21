const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    require: true
  }, 
  imageUrl: {
    type: String,
    require: true
  }
  
}
);



module.exports = mongoose.model('Category',categorySchema)