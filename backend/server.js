const express = require('express')
const cors  = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const userRoute = require('./routes/users')
const exersizeRoute = require('./routes/exersizes')

const app = express()


// middlewares
app.use(cors())
app.use(express.json())


//Routes 
app.use('/users', userRoute)
app.use('/exersizes', exersizeRoute)




mongoose.connect(process.env.DB_URL,
    { useNewUrlParser: true ,useUnifiedTopology: true },
    ()=>{console.log('db connected ');
})

const port = process.env.PORT || 2999
app.listen(port, ()=> { 
    console.log(`server on ${port}`);
})