const express = require('express')
require('dotenv').config()


const app = express()

app.use(express.json())

const connectDB = require('./connectMongoDb')

connectDB()

const ProductModel = require('./models/product_model')

app.get('/api/v1/products', async (req, res) => {
    try {
        const data = await ProductModel.find()
        return res.status(200).json({
            msg: 'OK',
            data
        })

    }catch(error){
        return res.status(500).json({
            msg: error.message
        })
    }
})

app.post('/api/v1/products', async (req, res) => {
    try {
        const { name, imageUrl, price, description } = req.body
        const product = new ProductModel({
            name, imageUrl, price, description
        })
        const data = await product.save()
        return res.status(200).json({
            msg: 'OK',
            data
        })

    }catch(error){
        return res.status(500).json({
            msg: error.message
        })
    }
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server is running in port "+PORT)
})
