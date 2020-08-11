var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/crud',{useMongoClient:true,useFindAndModify:true})
var Schema = mongoose.Schema
var stuSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  gender:{
    type:Number,
    enum:[0,1],
    default:0
  },
  age:{
    type:Number
  },
  hobbies:{
    type:String
  }
})
var Student = mongoose.model('Student',stuSchema)
module.exports = Student