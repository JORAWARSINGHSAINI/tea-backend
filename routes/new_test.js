const express = require('express'); 
var router = express.Router(); 
const mongoose = require('mongoose');
const Test = require('../models/test');

router.get('/',async function (req, res) {
    try{
        const cl = await Test.findById(req.body.id);
        res.json(cl);    
    }
    catch(err)
    {
        console.log(err)
        res.json({err:err.message})
    }

})

router.post('/',async function (req, res) {
    try{
    const result = Test(req.body)
    const c2 = await result.save()
    res.json(c2); 
    }
    catch(err)
    {
        console.log(err)
        res.json({err:err.message})
    }
})

router.patch('/',async function (req, res) {
    try{
        const cl = await Test.findById(req.body.id);
        cl[req.body.para] = req.body.val;
        const c2 = await cl.save()
        res.json(c2);    
    }
    catch(err)
    {
        console.log(err)
        res.json({err:err.message})
    }

})

router.delete('/',async function (req, res) {
    try{
        const cl = await Test.findByIdAndDelete(req.body.id);
        res.json(cl);    
    }
    catch(err)
    {
        console.log(err)
        res.json({err:err.message})
    }

})

module.exports = router; 
