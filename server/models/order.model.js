const mongoose=require('mongoose')

const orderSchema= new mongoose.Schema({

      title:{type:'string',required:false},
      price:{type:'Number',required:false},
      description:{type:'string',required:false},
      category:{type:'string',required:false},
      rating:{type:'string',required:false},
      image:[String]
      
})
module.exports=mongoose.model("order",orderSchema)