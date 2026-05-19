const mongoose=require("mongoose")
const usersSChema=new mongoose.Schema({
    name:{type:String},
    password:{type:String},
    email:{type:String}
})



module.exports=mongoose.model("user",usersSChema)