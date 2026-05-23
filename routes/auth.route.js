

const express=require('express')
const { regster,login } = require('../controllers/auth.controller')
const athroute=express.Router()
const {opitIT}=require('../middleware/opitIT.js')
const {checkAge}=require('../middleware/checkAge.js')
athroute.post('/register',checkAge,opitIT,regster)
athroute.post('/login',opitIT,login)
module.exports=athroute








































module.exports=athroute

