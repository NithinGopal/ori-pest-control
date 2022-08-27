import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants } from '../containerVariants'
import WhatsappBtn from '../whatsappBtn/WhatsappBtn'
import ContactBtn from '../contactBtn/ContactBtn'
import QuoteBtn from '../quoteBtn/QuoteBtn'
import './contactBtnBox.styles.css'

const ContactBtnBox = () => {
  return (
    <motion.div 
      className='ori__contactBtnBox' 
      variants={containerVariants} 
      initial='hidden' 
      animate='visible'
    >
        <div className='ori__contactBtnBox-call'>
            <WhatsappBtn />
            <ContactBtn />
        </div>
        <div className='ori__contactBtnBox-quote'>
            <QuoteBtn />
        </div>
    </motion.div>
  )
}

export default ContactBtnBox