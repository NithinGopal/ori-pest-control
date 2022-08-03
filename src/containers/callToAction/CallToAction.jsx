import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPhoneCall } from 'react-icons/fi'
import Button from '../../components/buttons/miscButtons/Button'
import './callToAction.styles.css'

const CallToAction = () => {
  const navigate = useNavigate()
  return (
    <div className='ori__cta section__padding'>
      <div className='ori__cta-heading'>
        <h1>Contact Us</h1>
      </div>
      <div className='ori__cta_container'>
        <div className='ori__cta-num'>
          <a href="tel:+91">
            
            <h4><span><FiPhoneCall /></span> 9518947137</h4>
          </a>
        </div>
        <div className='ori_cta-chat'>
          <Button text='Chat with us' />
        </div>
        <div className='ori__cta-callback'>
          <Button onClick={() => navigate('contactpage')} text='Schedule Inspection' />
        </div>
      </div>
    </div>  
  )
}

export default CallToAction