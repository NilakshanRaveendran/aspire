import React from 'react'
import './Footer.css'
import fb from '../assets/fb.png'
import link from '../assets/link.png'
import you from '../assets/you.png'

const Footer = () => {
  return (
    <div className="footer">
        <div class="footer-main-div">
        <div class="middle-div">
            <div class="hr-div-left"></div>
            <div class="hr-div">
              <img src={fb} alt="" />
              <img src={link} alt="" />
              <img src={you} alt="" />
            </div>
            <div class="hr-div-right"></div>
            
        </div>
    </div>
    </div>
  )
}

export default Footer;