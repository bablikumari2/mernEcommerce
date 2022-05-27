const express= require('express')
const router= express.Router()
const Checkout=require('../models/checkout.model.js')


router.post("/checkout",async (req,res)=>{

    try{
        const checkout=await Checkout.create(req.body)
        return res.status(201).send(checkout)
    }catch(e){
        res.status(400).send(e.message)
    }
})
router.get("/checkout",async (req,res)=>{

    try{
        const checkout=await Checkout.find().lean().exec()
        return res.status(201).send(checkout)
    }catch(e){
        res.status(400).send(e.message)
    }
})



module.exports=router
