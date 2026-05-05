const mongoose=require("mongoose")
const userSChema=new mongoose.Schema({
    name:{typeof:String},
    email:{typeof:String},
    age:{typeof:Number},
})

module.exports=mongoose.model("USers",userSChema)