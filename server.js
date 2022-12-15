require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.set('strictQuery', true); //this was from stack overflow biar gak error
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to the database!'))

//let our server accept json
app.use(express.json())

const subscribersRoute = require('./routes/subscribers')
app.use('/subscribers', subscribersRoute)

app.listen(5000, ()=> console.log('server had started!'))