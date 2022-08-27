import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { buttonVariants } from '../btnVariants'
import './heroButton.styles.css'

const HeroButton = ({ icon, text, route}) => {
  return (
    <div className='ori__heroButton'>
      <Link to={route}>
        <motion.button 
          variants={buttonVariants} 
          whileHover='hover' 
          whileTap='click'
        >
          {icon}
          <p>{text}</p>
        </motion.button>
      </Link>
    </div>
    
  )
}

export default HeroButton