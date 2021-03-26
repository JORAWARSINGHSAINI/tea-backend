const express = require('express'); 
var router = express.Router(); 
const Student = require('../models/student');

router.get('/',async function (req, res) {
    try{
        const cl = await Student.findById(req.body.id);
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
    const result = new Student(req.body)
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
        const cl = await Student.findById(req.body.id);
        if(req.body.para === 'classes')
        {
            cl['classes'].push(req.body.val);
        }
        else
        {
            cl[req.body.para] = req.body.val;
        }
        
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
        
        const cl = await Student.findByIdAndDelete(req.body.id);
        res.json(cl);    
    }
    catch(err)
    {
        console.log(err)
        res.json({err:err.message})
    }

})

module.exports = router; 
