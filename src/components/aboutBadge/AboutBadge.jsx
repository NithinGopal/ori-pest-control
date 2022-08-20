import React from 'react'
import './aboutBadge.styles.css'
import { BiHomeSmile, BiSupport } from 'react-icons/bi'
import { AiOutlineSchedule } from 'react-icons/ai'
import { BsPersonBadge } from 'react-icons/bs'

const AboutBadge = ({ icon, text}) => {
  return (
    <div className='ori__aboutBadge'>
        <div className='ori__aboutBadge-card'>
            <BiHomeSmile color='#334B4A' size={80} />
            <h2>500+ homes serviced</h2>
            <p>Specializing in your local pest populations.</p>
        </div>
        <div className='ori__aboutBadge-card'>
            <AiOutlineSchedule color='#334B4A' size={80} />
            <h2>Flexible Scheduling</h2>
            <p>We work around your schedule to provide hassle free service.</p>
        </div>
        <div className='ori__aboutBadge-card'>
            <BsPersonBadge color='#334B4A' size={80} />
            <h2>On-staff entomologists.</h2>
            <p>Our expert in house entomologists will recommend tailored solutions.</p>
        </div>
        <div className='ori__aboutBadge-card'>
            <BiSupport color='#334B4A' size={80} />
            <h2>Always-on support.</h2>
            <p>With online scheduling, purchasing, and 24/7 customer service.</p>
        </div>
    </div>
  )
}

export default AboutBadge