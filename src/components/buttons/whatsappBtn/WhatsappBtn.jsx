import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { linkVariants } from '../btnVariants'
import './whatsappBtn.style.css'

const WhatsappBtn = () => {
  return (
    <div className='ori__whatsappBtn'>
        <motion.a 
          href='https://wa.me/message/RE3RCGX3NMFDP1' 
          target='_blank' 
          rel="noreferrer" 
          variants={linkVariants} 
          initial='hidden' 
          animate='visible' 
          whileHover='hover' 
          whileTap='click'
        >
            <motion.button variants={linkVariants}>
                <FaWhatsapp size={24} />
                <p>Whatsapp</p>
            </motion.button>
        </motion.a>
    </div>
  )
}

export default WhatsappBtn