import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from "../REDUX/userSlice";

const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [form,setform]=useState({
  email:"",
  password:""
})
const loginhandle = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:5000/auth/login",form,{
        withCredentials: true
      }
    );

    console.log('redux store : '+res.data.user?.name );
  dispatch(setUser(res.data.user));
    navigate('/')
alert('Login successfully...')
  } catch (error) {
    console.log('Error in login axios '+error);
    alert('Login false...')
  }
};


  return (
    <div className='login'>
     <form onSubmit={loginhandle}>
       <div className='login-box'>
        <h1>Login</h1>

        <input
        value={form.email}
        onChange={(e)=>setform({...form,email:e.target.value})}
          type='email'
          placeholder='Enter Email...'
        />

        <input
        value={form.password}
        onChange={(e)=>setform({...form,password:e.target.value})}
          type='password'
          placeholder='Enter Password...'
        />

        <a href='/signup'>
          Don't have an account? Signup
        </a>

        <button type='submit'>Login</button>
      </div>
     </form>
    </div>
  )
}

export default Login