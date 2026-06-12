import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from "../REDUX/userSlice";


const Logout = () => {
     const navigate=useNavigate();
  const dispatch=useDispatch();
const handlelogout = async () => {
  try {
    const res = await axios.get(
      "http://localhost:5000/auth/logout",{
        withCredentials: true
      }
    );

  dispatch(setUser(null));
  navigate('/login')
alert('user logout successfully');
  } catch (error) {
    console.log(error.response?.data);
  }
};

  return (
    <div className="logout">
        <button onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Logout