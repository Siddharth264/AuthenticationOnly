import { signOut } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../config'

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()

    const handleClick = async () => {
        try{
            await signOut(auth)
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            navigate('/login')

        }catch(error){
            console.log(error)
        }
    }


  return (
    <div className='main-container'>
        <h1 className='header'>Siddhar.(au)th</h1>
        <h1>Welcome</h1>
        <br />
        <br />
        <img className='profile-photo' src={user.photoURL} alt="" />
        <h2>{user && user.displayName}</h2>
        <h2>{user && user.email}</h2>
        <br />
        <button className='logout-btn' onClick={handleClick}>Logout</button>
    </div> 
  )
}

export default Home