const users=[{"id":1,"name":"Ruslan"},{"id":2,"name":"Firdsv"}]
const getUSer=async(req,res)=>{
    res.send(users )
}
const postUSer=async(req,res)=>{
     const userID=req.params.userid
        const findUser=users.find((item)=>item.id==userID)
        res.send(findUser)
}
module.exports={getUSer,postUSer}