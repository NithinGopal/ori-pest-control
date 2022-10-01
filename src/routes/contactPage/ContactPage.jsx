import React from 'react'
import { motion } from 'framer-motion'
import { imageVariants } from '../../assets/imageVariants'
import { FaFacebook, FaWhatsapp, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa'
import ContactForm from '../../containers/contactForm/ContactForm'
import cpHero from '../../assets/contact-page/contact-page-hero.png'
import './contactPage.styles.css'
import FormikContainer from '../../containers/formikForm/FormikContainer'
import Socials from '../../containers/socials/Socials'
import logo from '../../assets/ori-logo.png'

const ContactPage = () => {
  return (
    <div className='ori__contactPage'>
      <div className='ori__contactPage-hero'>
        <div className='ori__contactPage-hero_img'>
          <motion.img loading='lazy' variants={imageVariants} initial='hidden' animate='visible' src={cpHero} alt="cpHero" />
        </div>
        <div className='ori__contactPage-hero_content'>
          <div className='ori__contactPage-hero_content-logo'>
            <img src={logo} alt="logo" />
          </div>
          <div className='ori__pestControl-hero_content-socials'>
            <Socials size={32} />
          </div>
        </div>
      </div>
      <div className='ori__contactPage-contact'>
        <div className='ori__contactPage-contact_content'>
          <p>GET A QUOTE</p>
          <h2>Get your free, personalized, no obligation quote.</h2>
          <p>
            Our technicians are trained to diagnose and treat all types of pest problems. 
            Because every home is different, they work with you to design a unique 
            program for your situation.
          </p>
        </div>
        <div className='ori__contactPage-contact_form'>
         {/* <ContactForm /> */}
         <h2>Contact Us</h2>
         <FormikContainer />
        </div>
      </div>
    </div>
  )
}

export default ContactPage