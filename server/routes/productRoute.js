const { Router } = require('express')
const express = require ('express')
const router = express.Router()
const productModel = require('../model/productModel')

//GET ALL PRODUCTS || @GET REQUEST

router.get('/getALLProducts', async (req,res) => {
    try {
        const products = await productModel.find({})
        res.send(products)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router