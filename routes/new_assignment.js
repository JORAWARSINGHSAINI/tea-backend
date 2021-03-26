const express = require('express'); 
var router = express.Router(); 
const Assignment = require('../models/assignment');

router.get('/',async function (req, res) {
    try{
        const cl = await Assignment.findById(req.body.id);
        res.json(cl);    
    }
    catch(err)
    {
        console.log(err)
    }

})

router.post('/',async function (req, res) {
    try{
    const result = Assignment(req.body)
    const c2 = await result.save()
    res.json(c2); 
    }
    catch(err)
    {
        console.log(err)
    }
})

router.patch('/',async function (req, res) {
    try{
        const cl = await Assignment.findById(req.body.id);
        cl[req.body.para] = req.body.val;
        const c2 = await cl.save()
        res.json(c2);    
    }
    catch(err)
    {
        console.log(err)
    }

})

router.delete('/',async function (req, res) {
    try{
        const cl = await Assignment.findByIdAndDelete(req.body.id);
        res.json(cl);    
    }
    catch(err)
    {
        console.log(err)
    }

})

module.exports = router; 
