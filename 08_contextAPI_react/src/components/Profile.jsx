import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {user}=useContext(UserContext);
    if(!user){
        return <p>Please login</p>
    }
  return (
    <div>
      <h1>Profile: {user.username}</h1>

      <p>More components...</p>
    </div>
  )
}

export default Profile
