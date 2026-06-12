const User=require('../models/userModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


const register=async(req,res)=>{
try {
    // taking name, email, password
    const { name, email, password,gender }=req.body;
    // if any one missing
if(!name || !email || !password || !gender){
    return res.status(400).json({
        success:false,
        message:"All fields are requireds"
    })
}

const isAlreadyExist= await User.findOne({email})
if(isAlreadyExist){
    return res.status(400).json({
        success:false,
        message:"user alreadyt exist with this email plz login"
    })
}

const isname= await User.findOne({name})
if(isname){
    return res.status(400).json({
        success:false,
        message:"user name already Exist"
    })
}


const hashpass= await bcrypt.hash(password,10);

const newUser= await User.create({
    name,
    email,
    gender,
    password:hashpass
})

return res.status(201).json({
    success:true,
    message:"user register succesfully",
    newUser
})





} catch (error) {
    console.log('register api error '+error)
}
}


const login=async(req,res)=>{
    try {
        // taking emqail, password
        const { email, password}=req.body;
// if any one missing
if(!email || !password){
    return res.status(400).json({
        success:false,
        message:"all fields are required"
    })
}
// chek in db
const user=await User.findOne({email})
// if not found
if(!user){
    return res.status(400).json({
        success:false,
        message:"user not exist plz signup"
    })
}

const isMatch= await bcrypt.compare(password,user.password)
if(!isMatch){
    return res.status(400).json({
        success:false,
        message:"password not matched"
    })
}

//==================token system=====================//
const token=await jwt.sign(
    {userId:user._id},
    process.env.JWT_SECRET,
    {expiresIn:'7d'}
);

res.cookie("auth_token",token,{
    httpOnly:true
})

return res.status(200).json({
    success:true,
    message:"user login succesfullt",
    token,
    user
})

    } catch (error) {
        console.log('Error in login api '+error)
    }
}
const logout=async(req,res)=>{
    try {
        // clear cookie
        res.clearCookie("auth_token");
        // return responce
return res.status(200).json({
    success:true,
    message:"user logout successfully"
})

    } catch (error) {
        console.log('error in logout API '+error)
    }
}

const getAllUsers=async(req,res)=>{
    try {
        // loginuser
        const loginUser=req.user._id;
        // if user not login
if(!loginUser){
    return res.status(400).json({
        success:false,
        message:" login plz then get all users"
    })
}

const users = await User.find({
    _id: { $ne: loginUser }
}).select("-password");
if(!users){
    return res.status(400).json({
        success:false,
        message:"all users not found "
    })
}


return res.status(200).json({
    success:true,
    message:"all users fetch succfully",
    users
})



    } catch (error) {
        console.log('Error in geting all users '+error)
    }
}



module.exports={ register, login, logout, getAllUsers}; 