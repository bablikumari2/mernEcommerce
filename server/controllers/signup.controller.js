
const express=require('express')
const { body, validationResult } = require('express-validator')
const User=require('../models/signup.model.js')
const router= express.Router()


const bcrypt=require('bcryptjs')
const jwt =require('jsonwebtoken')


router.post("/signup",
 body('email').isEmail(),
 body('mobile').isLength({min :10 , max:10}),
 body("password").isString().custom(async (value)=>{
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(pattern.test(value)) return true;
    throw new Error(("Password is not strong"));
}),

  async (req,res)=>{

    

    const {username,email,mobile,password:plaintext} =req.body
     const password = await bcrypt.hash(plaintext,10)
     try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
         const newuser = await User.create({username,email,mobile,password})

         return  res.status(200).json({status:"success",message:"user registered successfully",user:newuser})

     }catch(e){
        return res.status(500).json({status:"failed",message:e.message})
     }
})
// ---------------------LOG IN---------------------------------

router.post("/login",async(req,res)=>{
    const {email,password}= req.body
    try{
        const user = await User.findOne({email}).lean().exec()
        
        if(!user){
          res.status(404).json({status:"failed",message:"user not registered"})
        }
        const match =await bcrypt.compare(password,user.password)

        if(!match){
            res.status(404).json({status:"failed",message:"Password is invalid"})
        }
        const token = jwt.sign({_id:user._id},"secret")
       
        return res.status(200).json({status:"success",message:"log in successfull", user:user,token})

    }catch(e){
        res.status(500).send(e.message)
    }

   
})
module.exports=router