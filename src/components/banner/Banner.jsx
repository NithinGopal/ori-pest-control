import React from 'react'
import './banner.styles.css'
import { MdLocalOffer } from 'react-icons/md'
import { motion } from 'framer-motion'

const bannerVariants = {
  hidden: {
    // x: 0,
    scale:0.9
  },
  visible: {
    // x: '50vw',
    scale:1.1,
    transition: {
      duration: 2,
      yoyo: Infinity,
    }
  }
}

const Banner = () => {
  return (
    <div className='banner-container'>
      <motion.div variants={bannerVariants} initial='hidden' animate='visible' className='banner-container_content'>
        <MdLocalOffer size={20} color='#00506C' />
        <p>
          20% Discount! Insurance cover upto 10 lakhs on Termite control service.
        </p>
      </motion.div>
        
    </div>
  )
}

export default Banner