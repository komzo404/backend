const mongoose=require("mongoose")
const usersSChema=new mongoose.Schema({
    name:{type:String},
    password:{type:String},
    email:{type:String},
    age:{type:Number},
    opit:{type:Number}
},
{
        timestamps:true
    })



module.exports=mongoose.model("user",usersSChema)