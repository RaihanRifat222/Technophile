const express= require('express')
const dotenv = require('dotenv')
const connectDB = require ('./config/config')
require('colors')
const morgan= require('morgan')
const bgMagenta =require('colors')

//config dotenv
dotenv.config()

//connection mongodb
connectDB()

const app= express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//route
app.use('/api/products', require('./routes/productRoute'))
app.get('/', (req, res)=>{
    res.send('<h1>hello from node serverrr <h1/>')
})

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server running On ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white)
})

