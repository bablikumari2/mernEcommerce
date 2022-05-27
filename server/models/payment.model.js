const mongoose=require('mongoose')

const paymentSchema= new mongoose.Schema({

    
     card:{type:'string',required:false,unique:false},
     cvv:{type:'string',required:false,unique:false},
     date:{type:'string',required:false,unique:false},
     

    
})
module.exports = mongoose.model("Payment",paymentSchema)