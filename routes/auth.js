const express = require('express')
const router = express.Router()


router.get('/login', (res, req, next)=>{
    res.render('login')
})

module.exports = router