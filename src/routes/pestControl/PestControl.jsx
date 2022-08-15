import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import ServiceCard from '../../components/serviceCard/ServiceCard'

import termite from '../../assets/servicesAssets/termite.png'
import bedbug from '../../assets/servicesAssets/bed-bug.png'
import ticks from '../../assets/servicesAssets/ticks.png'
import ant from '../../assets/servicesAssets/ant.png'
import cockroach from '../../assets/servicesAssets/cockroach.png'
import rat from '../../assets/servicesAssets/rat-looking-right.png'
import spider from '../../assets/servicesAssets/spider.png'
import pcHero from '../../assets/pest-control/pc-hero.png'
import guarantee from '../../assets/guarantee-nobg.png'
import './pestControl.styles.css'
import Approach from '../../containers/approach/Approach'
import FAQ from '../../containers/faq/FAQ'
import Connect from '../../containers/connect/Connect'

const PestControl = () => {
  return (
    <div className='ori__pestControl'>
      <div className='ori__pestControl-hero'>
        <div className='ori__pestControl-hero_img'>
          <img src={pcHero} alt="pest-control-hero" />
        </div>
        <div className='ori__pestControl-hero_content'>
          <h5>ORI PEST COP</h5>
          <h1>Pest Control</h1>
          <div className='ori__pestControl-hero_content-socials'>
            <a href='https://www.facebook.com/oripestservice' target='_blank' rel="noreferrer"><FaFacebook size={24} /></a>
            <a href='https://wa.me/message/RE3RCGX3NMFDP1' target='_blank' rel="noreferrer"><FaWhatsapp size={24} /></a>
            <a href='https://youtube.com/channel/UCDck-_3SmiS36pUmOSV22Gw' target='_blank' rel="noreferrer"><FaYoutube size={24} /></a>
            <a href='https://www.linkedin.com/in/ori-pest-cop-372175218' target='_blank' rel="noreferrer"><FaLinkedin size={24} /></a>
            <a href="https://www.instagram.com/oripestcop/" target='_blank' rel="noreferrer"><FaInstagram size={24} /></a>
          </div> 
        </div>
      </div>
      <div className='ori__pestControl-problem'>
        <div className='ori__pestControl-problem_left'>
          <p>PEST PROBLEM? WE CAN HELP.</p>
          <h2>Targeted Treatments for the Most Common Household Pests</h2>
        </div>
        <div className='ori__pestControl-problem_right'>
          <h3>Don't let pests take over your home</h3>
          <p>
            With award-winning training and advanced technology, 
            your Ori specialist will look for conditions that invite pests and 
            then tackle current infestations.
          </p>
        </div>
      </div>
      <div className='ori__pestControl-services'>
        <h1>SERVICES</h1>
        <div className='ori__pestControl-services_serviceCards'>
          <ServiceCard image={termite} name='Termite' route='/termitecontrol' />
          <ServiceCard image={bedbug} name='Bed Bugs' route='/pestcontrol' />
          <ServiceCard image={ticks} name='Ticks' route='/pestcontrol' />
          <ServiceCard image={rat} name='Rats/Mice' route='/pestcontrol' />
          <ServiceCard image={cockroach} name='Cockroach' route='/pestcontrol' />
          <ServiceCard image={spider} name='Spiders' route='/pestcontrol' />
          <ServiceCard image={ant} name='Bed Bugs' route='/pestcontrol' />
      </div>
      </div>
      <div className='ori__pestControl-expect'>
        <div className='ori__pestControl-expect_img'>
          <img src={guarantee} alt="guarantee" />
        </div>
        <div className='ori__pestControl-expect_content'>
          <p>ORI EXPERIENCE</p>
          <h1>What to expect from Ori Pest Cop</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias 
            doloremque eaque beatae cupiditate suscipit corporis veritatis 
            magnam ad odit. Perspiciatis?
          </p>
        </div>
      </div>
      <div className='ori__pestControl-approach'>
        <Approach />
      </div>
      <FAQ />
      <div className='ori__pestControl-contact'>
        <Connect />
      </div>
    </div>
  )
}

export default PestControl