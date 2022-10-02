import React from 'react'
import './banner.styles.css'
import { TbDiscount2 } from 'react-icons/tb'
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

const offerVariants = {
  small: {
    scale: 0.8
  },
  big: {
    scale: 1.05,
    transition: {
      duration: 1,
      yoyo: Infinity
    }
  }
}

const Banner = () => {
  return (
    <div className='banner-container'>
      <motion.div variants={bannerVariants} initial='hidden' animate='visible' className='banner-container_content'>
        <p variants={offerVariants} initial='small' animate='big'>
          20% Discount! Insurance cover Upto 5-10 lakhs on Termite control service.
        </p>
        <p></p>
      </motion.div>
        
    </div>
  )
}

export default Banner