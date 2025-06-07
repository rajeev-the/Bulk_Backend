const express  = require('express');
const router = express.Router();

// Import the UseRController



router.get('/user',(req,res)=>{
    res.send('User Routes')
})






module.exports = router;