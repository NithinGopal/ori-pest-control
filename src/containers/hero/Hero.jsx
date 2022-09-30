import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants } from '../../components/buttons/containerVariants'
import { imageVariants } from '../../assets/imageVariants'
// import {Link, useNavigate} from 'react-router-dom'
import hero from '../../assets/hero.png'
import heroLogo from '../../assets/ori-logo.png'
import HeroButton from '../../components/buttons/heroButtons/HeroButton'
import { FaHome, FaBuilding } from 'react-icons/fa'
import './hero.styles.css'
import ContactBtnBox from '../../components/buttons/contactBtnBox/ContactBtnBox'

const Hero = () => {
    // const navigate = useNavigate()
  return (
    <div className='ori__hero'>
        <div className='ori__hero-content'>
            <div className='ori__hero-content_heading'>
                {/* <h1>Ori Pest Cop</h1> */}
                <motion.img variants={imageVariants} initial='hidden' animate='visible' src={heroLogo} alt='hero-logo' />
            </div>
            <div className='ori__hero-content_buttons'>
                <motion.div 
                    variants={containerVariants} 
                    initial='hidden' 
                    animate='visible' 
                    className='ori__hero-content_btn'
                >
                    <HeroButton route='/' text='Home' icon={<FaHome size={20} />} />
                    <HeroButton route='/commercial' text='Commercial' icon={<FaBuilding size={20} />} />
                </motion.div>
                <div className='ori__hero-content_contact'>
                    <ContactBtnBox />
                </div>
            </div>
            
        </div>
        <div className='ori__hero-image'>
            <img src={hero} alt='hero' />
        </div>
    </div>
  )
}
 
export default Hero