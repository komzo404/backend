

const checkAge=async(req,res,next)=>{
    const {age}=req.body

    if(age<18){
       return res.send("Kirish mumkin emas")
    }
    next()
}

module.exports={checkAge}