const users = require('../models/usermodels.js')
const bcrypt=require("bcrypt")
const regster = async (req, res) => {
  try {
    const { email, name, password } = req.body

    console.log(req.body)

    const user = await users.findOne({ email })

    console.log(user)

    // USER BORLIGINI TEKSHIRISH
    if (user) {
      return res.send('profilingiz mavjud')
    }

    // EMAIL VALIDATSIYA
    if (!email.includes('@gmail.com')) {
      return res.send('email format notogri')
    }

    // BO'SH FIELDLAR
    if (!email || !name || !password) {
      return res.send('malumotlar yetarli emas')
    }

    // USER YARATISH
    const hashedPassword= await bcrypt.hash(password,10)
    const newUser = await users.create({
      name,
      email,
      password:hashedPassword
    })
    await newUser.save()
    res.send('User yaratildi')

  } catch (err) {
    console.log(err)
    res.status(500).send('Server error')
  }
}



const login=async(req,res)=>{
    const {password,email}=req.body
     const user = await users.findOne({ email })
    if (!user) {
      return res.send('profilingiz mavjud emas oldin royxatdan otding')
    }
    const oldPassword=await bcrypt.compare(password,user.password)
    if(!oldPassword){
        res.send('Parol notogri') 
    }
    res.send('profilingizgaxush kelibsiz')

}









module.exports={regster,login}
 


