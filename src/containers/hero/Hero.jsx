import React from 'react'
import {useNavigate} from 'react-router-dom'
import hero from '../../assets/hero.png'
import heroLogo from '../../assets/hero-nobg4.png'
import HeroButton from '../../components/buttons/heroButtons/HeroButton'
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
                <HeroButton onClick={() => navigate('termite-control')} text='Termite Control' />
                <HeroButton onClick={() => navigate('pest-control')} text='Pest Control' />
            </div>
            <div className='ori__hero-content_contact'>
                <div className='ori__hero-content_contact-input'>
                <input type="tel" name="telphone" placeholder="Your phone number" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="12"  title="Ten digits code" required/>
                    <button type='submit'>Get Quote</button>
                </div>
                <div className='ori__hero-content_contact-btn'>
                    <button type='button'>Call Now</button>
                    <button type='button'>Chat</button>
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