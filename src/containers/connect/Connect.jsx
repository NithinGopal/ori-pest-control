import React from 'react'
import { Link } from 'react-router-dom'
import './connect.styles.css'

const Connect = () => {
  return (
    <div className='ori__termiteControl-connect'>
        <div className='ori__termiteControl-connect_call'>
            <h1>Connect with Us</h1>
            <p>Our customer care team is available for you 24 hours a day.</p>
            <div>
                <a href="tel:+91-9100094789">+91-9100094789</a>
            </div>
        </div>
        <div className='ori__termiteControl-form'>
            <h2>Get a Personalized Quote</h2>
            <p>We will help you find the right treatment plan for your home.</p>
            <Link to='/contact-page'><button>Get Free Quote</button></Link>
        </div>
    </div>
  )
}

export default Connect