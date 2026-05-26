const users=require('../models/models.js')
const putData=async(req,res)=>{
     const userID = req.params.id
     await users.findByIdAndUpdate(userID,req.body)
}
const deleteDAta=async(req, res)=>{
     const userID = req.params.id
     await users.findByIdAndDelete(userID)
     res.send({ success: true, users: flterUser })
}
 
const getUserId=async(req,res)=>{
    const userID=await req.params._id
    const user=await users.findOne(userID)
    res.send({data:user})
}

const getUser=async(req,res)=>{
    const user=await users.find()
    res.send({data:user})
}

const postData=async(req,res)=>{
    const newUser = new users(req.body)
    newUser.save()
    res.send('malumotqoshsksbh')
}
const getStudents = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const students = await users.find()
      .skip(skip)
      .limit(limit);

    const total = await users.countDocuments();

    res.status(200).json({
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      students
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

 module.exports={deleteDAta,putData,getUser,postData,getUserId,  getStudents}
