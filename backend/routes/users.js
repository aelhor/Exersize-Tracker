const express = require('express')
const User = require('../models/usermodel')
const router = express.Router()

router.get('/', async(req, res)=> { 
    try{
        const users = await User.find()
        res.json(users)
    }
    catch(error){
        res.status(500).json(error.message)

    }
})

router.post('/add', async(req, res)=> { 
    try{
        const user = new User(req.body)
        const newuser = await user.save()
        res.status(200).json({message : 'User Created', Newuser : newuser})
    }
    catch(error){
        res.status(500).json(error.message)
    }
})


module.exports = router