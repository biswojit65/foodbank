const express = require('express')
const router = express.Router()
const User = require('../models/User.js')
const Order= require('../models/Orders.js')
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
const jwtsec="iam56789dsfghjkl###@#$%^&*(@@@@@"
router.post('/createuser', [
    body('email', 'Invalid Email').isEmail(),
    body('password', 'Incorrect Password! Password length must be minimum 5 character').isLength({ min: 5 })],
    async (req, res) => {
        const salt=await bcrypt.genSalt(15);
        const secpass=await bcrypt.hash(req.body.password,salt);
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            User.create({
                name: req.body.name,
                password: secpass,
                location: req.body.location,
                email: req.body.email,
                phone: req.body.phone
            }).then(res.json({ success: "yes" }));
        } catch (error) {
            console.log(error);
            res.json({ success: "no" })
        }
    })
router.post('/loginuser', [
    body('email', 'Invalid Email').isEmail(),
    body('password', 'Incorrect Password! Password length must be minimum 5 character').isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        try {
            let finduser = await User.findOne({ email });
            if (!finduser) {
                return res.status(400).json({ errors: "This Email is not available with us.Please Sign up First as New User !" })
            }
            const pwdCompare = await bcrypt.compare(password, finduser.password);
            if (!pwdCompare) {
                return res.status(400).json({ errors: "This Password is not available with us.Correct your password !" })
            }
            const data={
                user:{
                    id:finduser.id
                }
            }
            const jwtoken=jwt.sign(data,jwtsec)
            return res.json({ success: 'yes',authToken:jwtoken })
        } catch (error) {
            console.log(error);
            res.json({ success: "no" })
        }
})
router.post('/fooditems', async (req, res) => {
    try {
        await res.send([global.food_data,global.food_catagory])
    } catch (error) {
        console.error(error.message)
        res.send("Server Error")

    }
})
router.post('/orderData', async (req, res) => {
    let data = req.body.order_data
    await data.splice(0,0,{Order_date:req.body.order_date})
    console.log("1231242343242354",req.body.email)

    //if email not exisitng in db then create: else: InsertMany()
    let eId = await Order.findOne({ 'email': req.body.email })    
    console.log(eId)
    if (eId===null) {
        try {
            console.log(data)
            console.log("1231242343242354",req.body.email)
            await Order.create({
                email: req.body.email,
                order_data:[data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                { $push:{order_data: data} }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
})
router.post('/myOrderData', async (req, res) => {
    try {
        console.log(req.body.email)
        let eId = await Order.findOne({ 'email': req.body.email })
        console.log(eId)
        res.json({orderData:eId})
    } catch (error) {
        res.send("Error",error.message)
    }
})
module.exports = router