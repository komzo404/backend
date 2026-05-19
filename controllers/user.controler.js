const users=require('../models/models.js')
const putData=async(req,res)=>{
     const userID = req.params.id
     await users.findByIdAndUpdate(userID,req.body)
}
const deleteDAta=async(req, res)=>{
     const userID = req.params.id
     await users.findByIdAndDelete(userID)
     res.send({ success: true, users: flterUser })
}
 
const getUserId=async(req,res)=>{
    const userID=await req.params._id
    const user=await users.findOne(userID)
    res.send({data:user})
}

const getUser=async(req,res)=>{
    const user=await users.find()
    res.send({data:user})
}

const postData=async(req,res)=>{
    const newUser = new users(req.body)
    newUser.save()
    res.send('malumotqoshsksbh')
}




 module.exports={deleteDAta,putData,getUser,postData,getUserId}
