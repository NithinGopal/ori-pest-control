import React from 'react'
import { FaFacebook, FaWhatsapp, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa'
import './socials.styles.css'
const Socials = () => {
  return (
    <div className='ori__socials'>
        <div className='ori__socials-heading'>
            <h3>Follow us on...</h3>
        </div>
        <div className='ori__socials-links'>
            <a href='https://www.facebook.com/oripestservice' target='_blank' rel="noreferrer"><FaFacebook size={24} /></a>
            <a href='https://wa.me/message/RE3RCGX3NMFDP1' target='_blank' rel="noreferrer"><FaWhatsapp size={24} /></a>
            <a href='https://youtube.com/channel/UCDck-_3SmiS36pUmOSV22Gw' target='_blank' rel="noreferrer"><FaYoutube size={24} /></a>
            <a href='https://www.linkedin.com/in/ori-pest-cop-372175218' target='_blank' rel="noreferrer"><FaLinkedin size={24} /></a>
            <a href="https://www.instagram.com/oripestcop/" target='_blank' rel="noreferrer"><FaInstagram size={24} /></a>
        </div>
    </div>
  )
}

export default Socials