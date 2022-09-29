import React from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import { motion } from 'framer-motion'
import { linkVariants } from '../btnVariants'
import './contactBtn.styles.css'


const ContactBtn = () => {
  return (
    <div className='ori__contactBtn'>
        <motion.a 
          href="tel:+919100094789" 
          variants={linkVariants} 
          whileHover='hover' 
          whileTap='click'
        >
          <motion.button 
            type='button'
          >
            <FiPhoneCall size={20} />
            <p>Call Us</p>
          </motion.button>
        </motion.a>
    </div>
  )
}

export default ContactBtn