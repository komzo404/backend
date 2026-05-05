const express=require('express')
const {getUSer,postUSer}=require('./controllers/user.controler')
const  mongoose  = require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const app=express()
const users=[{"id":1,"name":"Ruslan"},{"id":2,"name":"Firdsv"}]
app.use(express.json())
app.get('/users',getUSer)
app.post('/add',postUSer)
// app.delete('/delete/:id', (req, res) => {
//     const userID = req.params.id
//     const flterUser = users.filter((user) => user.id !== userID)
//     res.send({ success: true, users: flterUser })
// })
const {name,age,email}
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Bazaga ulandi'))
  .catch(err => console.log('Xatolik:', err))
// app.put('/put/:id', (req, res) => {
//     const userID = req.params.id
//     const findUser=users.find((item)=>item.id==userID)
//     findUser.name='JAsur' 
// })
app.listen(3001,()=>{
    console.log('Backend 3001-portda ishladi');
})




