const mongoose=require('mongoose')

const checkoutSchema = new mongoose.Schema({

     name:{type:'string',required:false},
     Address:{type:'string',required:false},
     pincode:{type:'Number',required:false},
      
})
module.exports = mongoose.model("Checkout",checkoutSchema)