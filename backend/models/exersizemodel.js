const mongoose = require('mongoose')

const Schema = mongoose.Schema
const exersizeSchema = new Schema({
    username : {
        type : String, 
        required : true
    },
    description : {
        type : String, 
        required : true
    },
    duration : {
        type : Number, 
        required : true
    },
    date : {
        type : Date, 
        required : true, 
        default : Date.now()
    },

}, {timestamps : true, })
const exersize = mongoose.model('Exersize', exersizeSchema)
module.exports = exersize
