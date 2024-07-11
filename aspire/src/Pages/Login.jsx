import React from 'react'
import './Login.css'
import apple from '../assets/a1.png'
import google from '../assets/g1.png'


const Login = () => {
  return (
    <div className="login">
        <div className="login-container">
            <h1>aspire.</h1>
            <h3>
            Log in to access personalized career guidance, detailed course information, and industry insights. Start your journey towards a clear and confident path to a bright career today.
            </h3>
            <h2>
            Your email or Phone number
            </h2>
            
            <input 
            type="search" 
            placeholder='Email or User name'
            className='input_field'/>

            <button className='sign-in-button'>Sign in</button>
            <div className="or">
                <hr />
                <p> or </p>
                <hr />
            </div>
            <button className='sign-button'><img src={google} alt="" />Continue with Google</button>
            <button className='sign-button'><img src={apple} alt=""/>Continue with Apple</button>
        </div>
    </div>
  )
}

export default Login;