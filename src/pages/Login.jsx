import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth, fbprovider, provider } from '../config'
import { useNavigate } from 'react-router-dom'
import Fblogo from '../assets/fb.png'
const Login = () => {
const navigate = useNavigate()
const handleClick = async () => {
    try{
        const res = await signInWithPopup(auth, provider)
        localStorage.setItem('token', res.user.accessToken);
        localStorage.setItem('user', JSON.stringify(res.user));
        navigate('/')
    }catch(error){
        alert('Error: ' + error.message)
    }
}

const handleFbLogin = async () => {
    try{
        const res = await signInWithPopup(auth, fbprovider)
        const credential = FacebookAuthProvider.credentialFromResult(res);
        localStorage.setItem('token', credential.accessToken);
        localStorage.setItem('user', JSON.stringify(res.user));
        navigate('/')
    }catch(error){
        console.log(error)
    }
}

  return (
    <div className='btn-cont'>
        <h1 className='header'>Siddhar.(au)th</h1>
        <h1 className='login-text'>LOGIN</h1>
        <GoogleButton onClick={handleClick}/>
        <div className="fb-cont">
        <img src={Fblogo} alt="" width="80px"/>
        <button className='fb-button' onClick={handleFbLogin}>Facebook Login</button>
        </div>
    </div>
  )
}

export default Login