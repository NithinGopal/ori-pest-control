import React from 'react'
import './termiteControl.styles.css'
import hero from '../../assets/termite-control/tc-hero.png'
import pipe from '../../assets/termite-control/water-pipe.png'
import damaged from '../../assets/termite-control/damaged.png'
import spread from '../../assets/termite-control/spread.png'
import infestation from '../../assets/termite-control/infestation.png'
import house from '../../assets/termite-control/tc-home.png'
import Approach from '../../containers/approach/Approach'
import custom from '../../assets/termite-control/custom-plan.png'
import FAQ from '../../containers/faq/FAQ'
import { termiteFaq } from '../../assets/textContent/faqContent'
import Connect from '../../containers/connect/Connect'
import TCScienceCard from '../../components/termiteControlCard/TCScienceCard'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const TermiteControl = () => {
  return (
    <div className='ori__termiteControl'>
      <div className='ori__termiteControl-title'>
        <div className='ori__termiteControl-title_heading'>
          <h1>ORI PEST COP</h1>
          <h1>TERMITE CONTROL</h1>
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
            <a href="tel:+919100094789">+91-9100094789</a>
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
            <Link to='/risk-damage'>Risk & Damage <span><FiArrowRight size={20} /></span></Link>
          </div>
          <div className='ori__termiteControl-science_content-cards'>
            <TCScienceCard 
              title='Silent Destroyers' 
              img={pipe} 
              text='Termites are often called the "silent destroyers" because they may be secretly hiding and thriving in your house.'
            />
            <TCScienceCard 
              title='High Cost Damage' 
              img={damaged} 
              text="Termites cost house owners more than 5 lakh in damage each year, and most insurance plans don't cover damage expense."
            />
            <TCScienceCard 
              title='Breed Quickly' 
              img={spread} 
              text='Some species of termite queens lay millions of eggs each year.'
            />
            <TCScienceCard 
              title='Home Termite Infestation' 
              img={infestation} 
              text='All termites consume cellulose-based plant materials. Unfortunately, all homes, regardless of their construction type, can provide cellulose food for termite infestation.'
            />
          </div>
        </div>

        <div className='ori__termiteControl-science_contact'>
          <p>GET YOUR CUSTOM QUOTE</p>
          <h2>Problems with pests? We can help.</h2>
          <a href="tel:+91-9100094789">+91-9100094789</a> <span>Or</span>
          <button>GET A FREE QUOTE</button>
          <div className='ori__termiteControl-science_contact-img'>
            <img src={house} alt="house" />
          </div>
        </div>
      </div>
      <Approach />
      <div className='ori__termiteControl-custom'>
        <div className='ori__termiteControl-custom_img'>
          <img src={custom} alt="custom-plan" />
        </div>
        <div className='ori__termiteControl-custom_content'>
          <p>CUSTOM TREATMENT</p>
          <h1>Termite Treatment Plans Tailored To You</h1>
          <p>Every home is unique, and so are our termite treatments for you and yours.</p>
        </div>
      </div>
      <FAQ faqContent={termiteFaq} />
      <Connect />
    </div>
  )
}

export default TermiteControl