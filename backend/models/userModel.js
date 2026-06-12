const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
name:{
    type:String,
    required:true,
    unique:true
},
email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
},
password:{
    type:String,
    required:true
},
gender:{
    type:String,
    required:true,
    enum:['male','female']
},
about:{
    type:String
}

},{timestamps:true})


const User = mongoose.model('User',userSchema);
module.exports=User