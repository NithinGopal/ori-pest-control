import React from 'react'
import './termiteControl.styles.css'
import hero from '../../assets/termite-control/termite-page-hero.png'
import Approach from '../../containers/approach/Approach'
import FAQ from '../../containers/faq/FAQ'
import Connect from '../../containers/connect/Connect'

const TermiteControl = () => {
  return (
    <div className='ori__termiteControl'>
      <div className='ori__termiteControl-title'>
        <div className='ori__termiteControl-title_heading'>
          <h1>Ori Pest Cop</h1>
          <h1>Termite Control</h1>
        </div>
        <div className='ori__termiteControl-title_content'>
          <p>
            Ori will develop a specific termite treatment strategy 
            for your home based on the design of your house and the 
            severity of the termite infestation.
          </p>
          <button>Schedule Inspection</button>
          <div className='ori__termiteControl-title_content-call'>
            <span>Or</span>
            <a href='#'>+91-9100094789</a>
          </div>
        </div>
      </div>
      <div className='ori__termiteControl-hero'>
        <img src={hero} alt='hero' />
        <div className='ori__termiteControl-hero_heading'>
          <h1>Home is where the termites aren't.</h1>
          <p>
            Repairing termite damage costs homeowners millions of rupees. 
            Spend less on termite repairs, and spend more on home improvements.
          </p>
        </div>
      </div>
      <div className='ori__termiteControl-science'>
        <div className='ori__termiteControl-science_content'>
          <div className='ori__termiteControl-science_content-heading'>
            <p>THE SCIENCE</p>
            <h1>How much of a risk are termites?</h1>
            <a href="/">Risk & Damage</a>
          </div>
          <div>
            <div>Silent Destroyers</div>
            <div>High Cost Damage</div>
            <div>Breed Quickly</div>
            <div>Home Termite Infestation</div>
          </div>
        </div>
        <div className='ori__termiteControl-science_contact'>
          <p>GET YOUR CUSTOM QUOTE</p>
          <h1>Problems with pests? We can help.</h1>
          <a href="/">+91-9100094789</a> <span>Or</span>
          <button>GET A FREE QUOTE</button>
        </div>
      </div>
      <Approach />
      <div className='ori__termiteControl-custom'>
        <div className='ori__termiteControl-custom_img'>
          <img src="" alt="custom-plan" />
        </div>
        <div className='ori__termiteControl-custom_content'>
          <p>CUSTOM TREATMENT</p>
          <h1>Termite Treatment Plans Tailored To You</h1>
          <p>Every home is unique, and so are our termite treatments for you and yours.</p>
        </div>
      </div>
      <FAQ />
      <Connect />
    </div>
  )
}

export default TermiteControl