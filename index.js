const express=require('express')

const app=express()
const users=[{"id":1,"name":"Ruslan"},{"id":2,"name":"Firdsv"}]
app.use(express.json())
app.get('/users',(req,res)=>{
    res.send(users )
})
app.get('/users/:userid',(req,res)=>{
    const userID=req.params.userid
    const findUser=users.find((item)=>item.id==userID)
    res.send(findUser)
})
app.post('/add',(req,res)=>{
    console.log(req.body);
    users.push(req.body)
    res.send({succes:true})
})
app.delete('/delete/:id', (req, res) => {
    const userID = req.params.id
    const flterUser = users.filter((user) => user.id !== userID)
    res.send({ success: true, users: flterUser })
})
app.put('/put/:id', (req, res) => {
    const userID = req.params.id
    const findUser=users.find((item)=>item.id==userID)
    findUser.name='JAsur'
    res.send({ success: true,messgae:"Profil ozgartirildi" })
})
app.listen(3001,()=>{
    console.log('Backend 3001-portda ishladi');
})