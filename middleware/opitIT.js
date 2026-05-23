


const opitIT=async(req,res,next)=>{
    const {opit}=req.body

    if(opit<3){
        return res.send("opit ytarlimas")
    }
    next()
}

module.exports={opitIT}