const express= require('express')
const router= express.Router()
const Product=require('../models/products.model.js')


router.post("/products",async (req,res)=>{

    try{
        const product=await Product.create(req.body)
        return res.status(201).send(product)
    }catch(e){
        res.status(400).send(e.message)
    }
})
router.get("/products",async (req,res)=>{

    try{
        const product=await Product.find().lean().exec()
        return res.status(201).send(product)
    }catch(e){
        res.status(400).send(e.message)
    }
})
router.get("/productlimit",async (req,res)=>{

    try{
        const product=await Product.find().limit(9).lean().exec()
        return res.status(201).send(product)
    }catch(e){
        res.status(400).send(e.message)
    }
})
router.get("/products/:id",async (req,res)=>{

    try{
        const product=await Product.findById(req.params.id).lean().exec()
        return res.status(201).send(product)
    }catch(e){
        res.status(400).send(e.message)
    }
})
router.get("/sort",async (req,res)=>{
        try {
            var sortObject = {};
            var stype = req.query.sorttype;
            var sdir = req.query.sortdirection;
            sortObject[stype] = sdir;
            const product = await Product.find().sort(sortObject).lean().exec()
            return res.status(200).send(product);
    
        } catch (err) {
            return res.status(500).send(err)
        }   
})

router.get("/sortbycategory",async (req,res)=>{
    try {
        var sortObject = {};
        var stype = req.query.sorttype;
        var sdir = req.query.sortdirection;
        sortObject[stype] = sdir;
        const product = await Product.find(sortObject).lean().exec()
        return res.status(200).send(product);

    } catch (err) {
        return res.status(500).send(err)
    }   
})


module.exports=router
