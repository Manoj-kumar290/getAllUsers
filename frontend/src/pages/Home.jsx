import React, { useEffect } from 'react'
import './Home.css'
import Leftside from './Leftside';
import { useDispatch, useSelector } from 'react-redux';
import {setUsers} from '../REDUX/Otheruser'
import axios from 'axios'

const Home = () => {
  const dispatch=useDispatch();
useEffect(() => {
  getAllUsers();
}, []);

const getAllUsers = async () => {
  try {
    const res = await axios.get("http://localhost:5000/auth/all",{
        withCredentials: true
      }
    );

  dispatch(setUsers(res.data.users));
  } catch (error) {
    console.log(error.response?.data);
  }
};

const users = useSelector(
  (state) => state.otherUsers.users
);



  return (
    <div className="home">

      {/* Left Side */}
 <Leftside/>

      {/* Right Side */}
      <div className="users-section">
        <h1>All Users</h1>

        <div className="users-list">
          {users.map((user) => (
            <div className="user-card" key={user._id}>
              <div className="user-avatar">
                {user.name.charAt(0)}
              </div>

              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home