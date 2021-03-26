const express = require('express'); 
var router = express.Router(); 
const mongoose = require('mongoose');
const Class = require('../models/class');

router.get('/',async function (req, res) {
    try{
        const cl = await Class.findById(req.body.id);
        res.json(cl);    
    }
    catch(err)
    {
        console.log(err)
        res.json({err:err.message})
    }

})

router.post('/',async function (req, res) {
    console.log(req.body)
    try{
    const result = new Class({
        'name': req.body.name,
        teacher: [req.body.teacherid],
    })
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
        const cl = await Class.findById(req.body.id);
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
        
        const cl = await Class.findByIdAndDelete(req.body.id);
        res.json(cl);    
    }
    catch(err)
    {
        console.log(err)
        res.json({err:err.message})
    }

})

module.exports = router; 
