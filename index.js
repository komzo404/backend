const express=require('express')
const dotenv=require('dotenv')
const route=require('./routes/user.route.js')
const authroutes=require('./routes/auth.route.js')
dotenv.config()
const app=express()
const dbConnect=require('./services/dbconnect.js')
app.use(express.json())
// const sayHello=async()=>{
//     console.log(111);
    
// }
// app.use(sayHello)
app.use('',route)
app.use('/auth',authroutes)
dbConnect()
app.listen(6666,()=>{
    console.log('Backend 6666-portda ishladi');
})















