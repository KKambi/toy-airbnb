const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next){
    res.render('index')
})

router.get('/login', function (req, res, next){
    res.render('login')
})

module.exports = router;
