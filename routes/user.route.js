const express=require('express')
const route=express.Router()
const {deleteDAta,putData,getUser,postData,getUserId,getStudents}=require('../controllers/user.controler')

route.get('/users',getStudents)
route.get('/users/:id',getUserId)
route.post('/add',postData)
route.delete('/delete/:id',deleteDAta)
route.put('/put/:id',putData)
module.exports=route