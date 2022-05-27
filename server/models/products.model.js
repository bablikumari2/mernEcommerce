const mongoose=require('mongoose')

const productSchema= new mongoose.Schema({

     title:{type:'string',required:true},
     price:{type:'Number',required:true},
     description:{type:'string',required:true},
     category:{type:'string',required:true},
     rating:{type:'string',required:true},
     image:[String]
},{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("product",productSchema)