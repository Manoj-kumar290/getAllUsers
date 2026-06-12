import React from 'react'
import './Home.css'
import { useSelector } from 'react-redux';
import Logout from './Logout';


const Leftside = () => {
const user = useSelector((state) => state.userAuth.user);

  return (
        <div className="sidebar">
        <h2>My Profile</h2>

        <div className="profile-card">
          <div className="avatar">
          {user.name.charAt(0)}
          </div>

          <h3>Name: {user?.name}</h3>
          <p>Gender: {user?.gender}</p>
          <p>Email: {user?.email}</p>
        </div>
     <Logout />
      </div>
  )
}

export default Leftside