import React from 'react'
import {FaFacebook, FaWhatsapp, FaRegCopyright, FaYoutube} from 'react-icons/fa'
import { Link } from 'react-router-dom'

import logo from '../../assets/footer-logo.png'
import './footer.styles.css'

const Footer = () => {
  return (
    <div className='ori__footer section__padding'>
      <div className='ori__footer-container'>
        <div className='ori__footer-container_logo'>
          <div className='ori__footer-container_logo-image'>
            <img src={logo} alt='logo' />
          </div>
          <div className='ori__footer-container_logo-address'>
            <p>Ori Pest Cop</p>
            <p>Haranadhapuram</p>
            <p>Muthukur Gate</p>
            <p>Nellore</p>
            <p>524203</p>
            <p>Andhra Pradesh</p>
            <p>India</p>
          </div>
        </div>
        <div className='ori__footer-container_services'>
          <div className='ori__footer-container_services-heading'>
            <h3>Services</h3>
          </div>
          <Link to='/termitecontrol'>Termite Control</Link>
          <Link to='/pestcontrol'>Pest Control</Link>
        </div>
        <div className='ori__footer-container_about'>
          <div className='ori__footer-container_about-heading'>
            <h3>About Ori</h3>
          </div>
          <a href='#'>About</a>
          <a href='#'>Blog</a>
        </div>
        <div className='ori__footer-container_contact'>
          <div className='ori__footer-container_contact-heading'>
              <h3>Contact</h3>
          </div>
          <a href="tel:+">91 9518947137</a>
          <a href='#'>Chat</a>
          <a href='#'>Email</a>
          <div className='ori__footer-container_contact-socials'>
            <a href='https://www.facebook.com/oripestservice' target='_blank' rel="noreferrer"><FaFacebook /></a>
            <a href='https://wa.me/message/RE3RCGX3NMFDP1' target='_blank' rel="noreferrer"><FaWhatsapp /></a>
            <a href='https://youtube.com/channel/UCDck-_3SmiS36pUmOSV22Gw' target='_blank' rel="noreferrer"><FaYoutube /></a>
          </div>
        </div>
    </div>
    <div className='ori__footer-container_copyright'>
      <p><span><FaRegCopyright /></span> 2022 Ori Pest Cop Limited Partnership. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer