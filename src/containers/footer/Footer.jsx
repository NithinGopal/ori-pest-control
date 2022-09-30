import React from 'react'
import {FaFacebook, FaWhatsapp, FaRegCopyright, FaYoutube, FaLinkedin, FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Socials from '../socials/Socials'

import logo from '../../assets/ori-logo.png'
import './footer.styles.css'

const Footer = () => {
  return (
    <div className='ori__footer'>
      <div className='ori__footer-container'>
        <div className='ori__footer-container_logo'>
          <div className='ori__footer-container_logo-image'>
            <img src={logo} alt='logo' />
          </div>
          {/* <div className='ori__footer-container_logo-address'>
            <p>Ori Pest Cop</p>
            <p>Haranadhapuram</p>
            <p>Muthukur Gate</p>
            <p>Nellore</p>
            <p>520203</p>
            <p>Andhra Pradesh</p> 
            <p>India</p>
          </div> */}
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
            <h3>About</h3>
          </div>
          <a href="#">Team</a>
        </div>
        <div className='ori__footer-container_contact'>
          <div className='ori__footer-container_contact-heading'>
              <Link to='/contact-page'><h3>Contact</h3></Link>
          </div>
          <a href="tel:+919100094789">Call Now</a>
        </div>
        <div className='ori__footer-container_contact-socials'>
          {/* <h3>Follow us on:</h3> */}
          <div className='ori__footer-container_contact-socials_links'>
            <Socials size={20} />
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