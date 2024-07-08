import React from 'react'
import './Header.css'
import logo from '../assets/aspire.png'


const Header = () => {

  

  return (
    <>
    <div className="header">
        <img src={logo} alt="logo" className='logo'/>
          <div className="links">
              <a href="" className='home-button'>Home</a>
              <a href="">About</a>
              <a href="">Faq</a>
              <a href="">Contact</a>
        </div>

        <div className="button">
            <button className="button1">Sign up</button>
            <button className="button2">Login</button>
        </div>

    </div>
    </>
  )
}

export default Header;