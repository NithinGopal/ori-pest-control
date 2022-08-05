import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPhoneCall } from 'react-icons/fi'
import Button from '../../components/buttons/miscButtons/Button'
import './callToAction.styles.css'

const CallToAction = () => {
  const navigate = useNavigate()
  return (
    <div className='ori__cta'>
      <div className='ori__cta-heading'>
        <h1>Contact Us</h1>
      </div>
      <div className='ori__cta_container'>
        <div className='ori__cta_container-num'>
          <span><FiPhoneCall size={22} color='#fff' /></span>
          <a href="tel:+91">9518947137</a>
        </div>
        <div className='ori__cta_container-chat'>
          <Button text='Chat with us' />
        </div>
        <div className='ori__cta_container-callback'>
          <Button onClick={() => navigate('contactpage')} text='Schedule Inspection' />
        </div>
      </div>
    </div>  
  )
}

export default CallToAction