import React from 'react'
import { motion } from 'framer-motion'
import { linkVariants } from '../buttons/btnVariants'
import { Link } from 'react-router-dom'
import './serviceCard.styles.css'

const ServiceCard = ({ image, name, route}) => {
  return (
    <motion.div variants={linkVariants} whileHover='hover' whileTap='click' className='ori__services_serviceCard'>
      <div className='ori__services_serviceCard-image'>
        <img src={image} alt={name} />
      </div>
      <div className='ori__services_serviceCard-content'>
        <p>INSPECTION</p>
        <Link to={route}>{name}</Link>
      </div>
    </motion.div> 
  )
}

export default ServiceCard