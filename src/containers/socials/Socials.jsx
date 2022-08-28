import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaWhatsapp, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa'
import './socials.styles.css'

const socialsVariants = {
  hover: {
    scale: 1.1,
    color: 'green',
  },
  click: {
    scale: 0.9,
    color: 'blue',
  }
}

const Socials = ({ size }) => {
  return (
    <div className='ori__socials'>
        <div className='ori__socials-heading'>
            <h3>Follow us on...</h3>
        </div>
        <div className='ori__socials-links'>
            <motion.a 
              href='https://www.facebook.com/oripestservice' target='_blank' rel="noreferrer" 
              variants={socialsVariants} 
              whileHover='hover' 
              whileTap='click'
            >
                <FaFacebook size={size} />
            </motion.a>
            <motion.a 
              href='https://wa.me/message/RE3RCGX3NMFDP1' target='_blank' rel="noreferrer" 
              variants={socialsVariants} 
              whileHover='hover' 
              whileTap='click'
            >
                <FaWhatsapp size={size} />
            </motion.a>
            <motion.a 
              href='https://youtube.com/channel/UCDck-_3SmiS36pUmOSV22Gw' target='_blank' rel="noreferrer" 
              variants={socialsVariants} 
              whileHover='hover' 
              whileTap='click'
            >
                <FaYoutube size={size} />
            </motion.a>
            <motion.a 
              href='https://www.linkedin.com/in/ori-pest-cop-372175218' target='_blank' rel="noreferrer" 
              variants={socialsVariants} 
              whileHover='hover' 
              whileTap='click'
            >
                <FaLinkedin size={size} />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/oripestcop/" target='_blank' rel="noreferrer" 
              variants={socialsVariants} 
              whileHover='hover' 
              whileTap='click'
            >
                <FaInstagram size={size} />
            </motion.a>
        </div>
    </div>
  )
}

export default Socials