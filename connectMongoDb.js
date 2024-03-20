const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async  () => {
try {
    await mongoose.connect(process.env.MONGODB_CONNECT_URI)
    connectTimeoutMS= 3000
    console.log("connect to mongo db")
}catch (error) {
    console.log("connection failed " + error.message)
}

}
//mongodb://127.0.0.1:27017/clothingapi

//process.env.MONGODB_CONNECT_URI
//MONGODB_CONNECT_URI='mongodb+srv://umashini2000:dbRoot@clothingstore.jg1kygt.mongodb.net/?retryWrites=true&w=majority&appName=clothingstore'
module.exports = connectDB