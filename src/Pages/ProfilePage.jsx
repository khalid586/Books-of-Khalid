import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { Navigate } from 'react-router-dom';

function ProfilePage() {
    const {user} = useContext(AuthContext);
    console.log(user)
  return (
    <div>
        {
            user ? 
            <div className='text-center mt-8'>
                {
                    user.email
                }
            </div>
            : <p><Navigate to = "/"></Navigate></p>
        }
    </div>
  )
}

export default ProfilePage