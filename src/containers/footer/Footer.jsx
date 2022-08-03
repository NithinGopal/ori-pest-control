import React from 'react'
import {FaFacebook, FaWhatsapp, FaTwitter, FaRegCopyright} from 'react-icons/fa'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import './footer.styles.css'

const Footer = () => {
  return (
    <div className='ori__footer section__padding'>
      <div className='ori__footer_container'>
        <div className='ori__footer_container_logo'>
          <div className='ori__footer_container_logo-image'>
            {/* <img src={logo} alt='logo' /> */}
          </div>
          <div className='ori__footer_container_logo-address'>
            <p>15-4-49</p>
            <p>xyz street</p>
            <p>Nellore</p>
            <p>524201</p>
          </div>
        </div>
        <div className='ori__footer_container_services'>
          <div className='ori__footer_container_services-heading'>
            <h3>Services</h3>
          </div>
          <Link to='/termitecontrol'>Termite Control</Link>
          <Link to='/pestcontrol'>Pest Control</Link>
        </div>
        <div className='ori__footer_container_about'>
          <div className='ori__footer_container_about-heading'>
            <h3>About Ori</h3>
          </div>
          <a>About</a>
          <a>Blog</a>
        </div>
        <div className='ori__footer_container_contact'>
          <div className='ori__footer_container_contact-heading'>
              <h3>Contact</h3>
          </div>
          <a href="tel:+">91 9518947137</a>
          <a>Chat</a>
          <a>Email</a>
          <div className='ori__footer_container_contact-socials'>
            <FaFacebook />
            <FaWhatsapp />
            <FaTwitter />
          </div>
        </div>
    </div>
    <div className='ori__footer_container_copyright'>
        <p><span><FaRegCopyright /></span> 2022 The Terminix International Company Limited Partnership. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer