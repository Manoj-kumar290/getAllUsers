import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const navigate=useNavigate();
const [form,setform]=useState({
  name:"",
  email:"",
  password:"",
  gender:""
})
const handleform = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/auth/signup",form,{
        withCredentials: true
      }
    );

    console.log(res.data);
alert('Signup successfully...')
navigate('/login')
  } catch (error) {
    console.log(error.response?.data);
    alert('Signup false...')
  }
};

  return (
   <div className="signup">
 <form onSubmit={handleform}>
   <div className="signup-box">
    <h1>Sign Up</h1>

    <input value={form.name} onChange={(e)=>setform({...form,name:e.target.value})} type="text" placeholder="Enter Name" />
    <input value={form.email} onChange={(e)=>setform({...form,email:e.target.value})} type="email" placeholder="Enter Email" />
    <input value={form.password} onChange={(e)=>setform({...form,password:e.target.value})} type="password" placeholder="Enter Password" />

    <select value={form.gender} onChange={(e)=>setform({...form,gender:e.target.value})}>
      <option value=''>Select Gender</option>
      <option value='male'>Male</option>
      <option value='female'>Female</option>
    </select>

  <a href='/login'> Already have an account? <span>Login</span></a>

  
    <button type='submit'>Create Account</button>

    
  </div>
 </form>
</div>
  )
}

export default Signup