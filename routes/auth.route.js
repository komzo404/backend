
const express=require('express')
const { regster,login } = require('../controllers/auth.controller')
const athroute=express.Router()

athroute.post('/register',regster)
athroute.post('/login',login)











































module.exports=athroute

