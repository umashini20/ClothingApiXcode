const express = require('express')
require('dotenv').config()


const app = express()

app.use(express.json())

const connectDB = require('./connectMongoDb')

connectDB()

const ProductModel = require('./models/product_model')
const CategoryModel = require('./models/category_model')
const BestSellerProductModel = require('./models/best_seller_product_model')
const DressCategoryModel = require('./models/dress_category_model')


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
// app.get('/api/v1/products', async (req, res) => {
//     try {
//         const data = await ProductModel.find()
//         return res.status(200).json({
//             msg: 'OK',
//             data
//         })

//     }catch(error){
//         return res.status(500).json({
//             msg: error.message
//         })
//     }
// })


app.post('/api/v1/products', async (req, res) => {
    try {
        const { name, imageUrl, price, description,category} = req.body
        const product = new ProductModel({
            name, imageUrl, price, description,category
        })
        if (!category || !category.cid || !category.catname || !category.catimageUrl) {
            return res.status(400).json({
                msg: 'Category data is incomplete. Please provide id, name, and imageUrl.'
            });
        }
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

app.get('/api/v1/category', async (req, res) => {
    try {
        const data = await CategoryModel.find()
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

app.post('/api/v1/category', async (req, res) => {
    try {
        const { name, imageUrl } = req.body
        const category = new CategoryModel({
            name, imageUrl
        })
        const data = await category.save()
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

app.get('/api/v1/bestseller', async (req, res) => {
    try {
        const data = await BestSellerProductModel.find()
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

app.post('/api/v1/bestseller', async (req, res) => {
    try {
        const { name, imageUrl, price, description } = req.body
        const bestseller = new BestSellerProductModel({
            name, imageUrl, price, description
        })
        const data = await bestseller.save()
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

app.get('/api/v1/dresscategory', async (req, res) => {
    try {
        const data = await DressCategoryModel.find()
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

app.get('/api/v1/dresscategory/:id', async (req, res) => {
    try {
        const data = await DressCategoryModel.findById(req.params.id)
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

app.post('/api/v1/dresscategory', async (req, res) => {
    try {
        const { name, imageUrl, price, description } = req.body
        const dresscategory = new DressCategoryModel({
            name, imageUrl, price, description
        })
        const data = await dresscategory.save()
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
