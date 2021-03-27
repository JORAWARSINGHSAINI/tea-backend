const express = require('express'); 
var router = express.Router(); 
const Institution = require('../models/institution');

router.get('/:id',async function (req, res) {
    try{
        const cl = await Institution.findById(req.params.id);
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
    const result = new Institution(req.body)
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
        const cl = await Institution.findById(req.body.id);
        if(req.body.para === 'classes')
        {
            cl['classes'].push(req.body.val);
        }
        else if(req.body.para === 'students')
        {
            cl['students'].push(req.body.val);
        }
        else if(req.body.para === 'teachers')
        {
            cl['teachers'].push(req.body.val);
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
        
        const cl = await Institution.findByIdAndDelete(req.body.id);
        res.json(cl);    
    }
    catch(err)
    {
        console.log(err)
        res.json({err:err.message})
    }

})

module.exports = router; 
