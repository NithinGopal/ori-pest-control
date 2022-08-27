import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { buttonVariants } from '../btnVariants'
import './quoteBtn.styles.css'

const QuoteBtn = () => {
  return (
    <div className='ori__quoteBtn'>
        <Link to='/contact-page'>
            <motion.button 
              variants={buttonVariants} 
              whileHover='hover' 
              whileTap='click'
            >
              Schedule Free Inspection
            </motion.button>
        </Link>
    </div>
  )
}

export default QuoteBtn