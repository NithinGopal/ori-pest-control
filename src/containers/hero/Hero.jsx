import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import hero from '../../assets/hero.png'
import heroLogo from '../../assets/hero-nobg4.png'
import HeroButton from '../../components/buttons/heroButtons/HeroButton'
import { FaHome, FaBuilding } from 'react-icons/fa'
import './hero.styles.css'

const Hero = () => {
    const navigate = useNavigate()
  return (
    <div className='ori__hero'>
        <div className='ori__hero-content'>
            <div className='ori__hero-content_heading'>
                {/* <h1>Ori Pest Cop</h1> */}
                <img src={heroLogo} alt='hero-logo' />
            </div>
            <div className='ori__hero-content_btn'>
                <HeroButton onClick={() => navigate('termite-control')} text='Home' icon={<FaHome size={20} />} />
                <HeroButton onClick={() => navigate('pest-control')} text='Commercial' icon={<FaBuilding size={20} />} />
            </div>
            <div className='ori__hero-content_contact'>
                <Link to='/contact-page'><button type='button'>Get Quote</button></Link>
                <a href="tel:+919100094789"><button className='btn' type='button'>Call Now</button></a>
                {/* <div className='ori__hero-content_contact-input'>
                    <input type="tel" name="telphone" placeholder="Your phone number" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="12"  title="Ten digits code" required/>
                    <Link to='/contact-page'><button type='button'>Get Quote</button></Link>
                </div>
                <div className='ori__hero-content_contact-btn'>
                <a href="tel:+919100094789"><button type='button'>Call Now</button></a>
                    <button type='button'>Chat</button>
                </div> */}
            </div>
        </div>
        <div className='ori__hero-image'>
            <img src={hero} alt='hero' />
        </div>
    </div>
  )
}

export default Hero