const users = require('../models/usermodels.js')

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
    const newUser = await users.create({
      name,
      email,
      password
    })

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
    if(user.password!==password){
        console.log('profilingiz mavjud emas oldin royxatdan otding');
        
    }
    res.send('profilingizgaxush kelibsiz')

}









module.exports={regster,login}
 


