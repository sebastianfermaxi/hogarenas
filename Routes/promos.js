const express = require('express');
const router = express.Router();

router.get('/promos', (req,res)=>{
    console.log(req)
    res.send('promos');
});

module.exports = router;