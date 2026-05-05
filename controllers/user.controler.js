// const users=[{"id":1,"name":"Ruslan"},{"id":2,"name":"Firdsv"}]
const users=require('../models.js')
const getUSer=async(req,res)=>{
    res.send(users )
}
const postUSer=async(req,res)=>{
     users.push(req.body)
}
module.exports={getUSer,postUSer}