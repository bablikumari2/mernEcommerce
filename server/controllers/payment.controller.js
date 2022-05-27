const express= require('express')
const router= express.Router()
const Payment=require('../models/payment.model.js')


router.post("/payment",async (req,res)=>{

    try{
        const payment = await Payment.create(req.body)
        return res.status(201).send(payment)
    }catch(e){
        res.status(400).send(e.message)
    }
})



module.exports=router
