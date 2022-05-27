const express=require('express')
const cors=require('cors')
const app=express()

const connect=require("./configs/db")
app.use(cors())
app.use(express.json())
 const usercontroller=require('./controllers/signup.controller.js')
 const productcontroller=require('./controllers/product.controller.js')
 const ordercontroller=require('./controllers/order.controller.js')
 const paymentcontroller=require('./controllers/payment.controller.js')
 const checkoutcontroller=require('./controllers/checkout.controller.js')

  app.use("",usercontroller)
  app.use("",productcontroller)
  app.use("",ordercontroller)
  app.use("",paymentcontroller)
  app.use("",checkoutcontroller)



app.listen(process.env.PORT || 8000,async ()=>{
   
    try{
    await connect()
    
        console.log("8000")
    }catch(e){
        console.log(e.message)
    }
})