import React from 'react'
import { FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import ContactForm from '../../containers/contactForm/ContactForm'
import './contactPage.styles.css'

const ContactPage = () => {
  return (
    <div className='ori__contactPage'>
      <div className='ori__contactPage-hero'>
        <div className='ori__contactPage-hero_img'>
          <img src="" alt="" />
        </div>
        <div className='ori__contactPage-hero_content'>
          <h3>Ori Pest Cop</h3>
          <h1>PEST PROBLEM? WE CAN HELP</h1>
          <div className='ori__pestControl-hero_content-socials'>
            <FaFacebook />
            <FaWhatsapp />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className='ori__contactPage-contact'>
        <div className='ori__contactPage-contact_content'>
          <p>GET A QUOTE</p>
          <h1>Get your free, personalized, no obligation quote.</h1>
          <p>
            Our technicians are trained to diagnose and treat all types of pest problems. 
            Because every home is different, they work with you to design a unique 
            program for your situation.
          </p>
        </div>
        {/* <ContactForm /> */}
      </div>
    </div>
  )
}

export default ContactPage