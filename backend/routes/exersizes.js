const express = require('express')
const Exersize = require('../models/exersizemodel')
const router = express.Router()

//Get all Exetsizes
router.get('/',async (req, res)=> { 
    try{
        const exersizes = await Exersize.find()
        res.json(exersizes)

    }catch(error) { 
        res.status(500).json(error)
    }
})

//Get a spacific Exersize
router.get('/:id', async(req, res)=> { 
    const id = req.params.id
    try{
        const yrExersize = await Exersize.findById(id)
        res.status(200).json({
            message : 'Here Is yr Exersize', 
            Exersize : yrExersize
        })

    }catch(error) { 
        res.status(500).json({
            Error : error
        })
    }
})

// Post New Exersize
router.post('/add', async(req, res)=> { 
    try{
        const exersize = new Exersize(req.body)
        const newExersize = await exersize.save()
        res.json({
            message : 'Exersize Created', 
            NewExersize : newExersize
        })
    }
    catch(error){ 
        res.status(500).json(error)
    }
})
// update Exersize 
router.patch('/:id', async(req, res)=> {
    const id = req.params.id
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)
    try{
        const updated = await Exersize.updateOne(
            {_id:id}, 
            {$set :{
                username : username , 
                description : description , 
                duration : duration, 
                date : date
                }
            }
        )
        res.status(200).json({
            message : 'Exersize Updated Sucessfully', 
            Updated : updated
        })
    }
    catch(error){ 
        res.status(500).json(error)
    }
})


// Delete an Exersize 
router.delete('/:id', async(req, res)=> { 
    const id = req.params.id
    try{
        const deletedExersize = await Exersize.remove({_id : id})
        res.json({
            message : 'Exersize Deleted Sucessfully', 
            Deleted_Exersize : deletedExersize
        })
    }
    catch(error){ 
        res.status(500).json(error)
    }
})


module.exports = router