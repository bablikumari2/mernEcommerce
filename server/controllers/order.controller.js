const express= require('express')
const router= express.Router()
const Order=require('../models/order.model.js')


router.post("/cartproduct",async (req,res)=>{

    try{
        const order = await Order.create(req.body)
        return res.status(201).send(order)
    }catch(e){
        res.status(400).send(e.message)
    }
})
router.get("/cartproduct",async (req,res)=>{

    try{
        const order = await Order.find().lean().exec()
        return res.status(201).send(order)
    }catch(e){
        res.status(400).send(e.message)
    }
})
router.delete("/cartproduct/:id",async (req,res)=>{

    try{
        const order=await Order.findByIdAndDelete(req.params.id)
        return res.status(201).json({status:"success",message:"deleted successfully",order:order})
    }catch(e){
        res.status(400).send(e.message)
    }
})
module.exports=router
