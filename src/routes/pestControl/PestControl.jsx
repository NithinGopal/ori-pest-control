import React from 'react'
import { FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import ServiceCard from '../../components/serviceCard/ServiceCard'

import termite from '../../assets/servicesAssets/termite.png'
import bedbug from '../../assets/servicesAssets/bed-bug.png'
import ticks from '../../assets/servicesAssets/ticks.png'
import ant from '../../assets/servicesAssets/ant.png'
import cockroach from '../../assets/servicesAssets/cockroach.png'
import rat from '../../assets/servicesAssets/rat-looking-right.png'
import spider from '../../assets/servicesAssets/spider.png'
import './pestControl.styles.css'
import Approach from '../../containers/approach/Approach'
import FAQ from '../../containers/faq/FAQ'
import Connect from '../../containers/connect/Connect'

const PestControl = () => {
  return (
    <div className='ori__pestControl'>
      <div className='ori__pestControl-hero'>
        <div className='ori__pestcontrol-hero_img'>
          <img />
        </div>
        <div className='ori__pestControl-hero_content'>
          <h2>Ori Pest Cop</h2>
          <h1>Pest Control</h1>
          <div className='ori__pestControl-hero_content-socials'>
            <FaFacebook />
            <FaWhatsapp />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className='ori__pestControl-problem'>
        <div className='ori__pestControl-problem_left'>
          <p>PEST PROBLEM? WE CAN HELP.</p>
          <h1>Targeted Treatments for the Most Common Household Pests</h1>
        </div>
        <div className='ori__pestControl-problem_right'>
          <p>Don't let pests take over your home</p>
          <p>With award-winning training and advanced technology, 
            your Ori specialist will look for conditions that invite pests and 
            then tackle current infestations.
          </p>
        </div>
      </div>
      <div className='ori__pestControl-serviceCards'>
        <ServiceCard image={termite} name='Termite' route='/termitecontrol' />
        <ServiceCard image={bedbug} name='Bed Bugs' route='/pestcontrol' />
        <ServiceCard image={ticks} name='Ticks' route='/pestcontrol' />
        <ServiceCard image={rat} name='Rats/Mice' route='/pestcontrol' />
        <ServiceCard image={cockroach} name='Cockroach' route='/pestcontrol' />
        <ServiceCard image={spider} name='Spiders' route='/pestcontrol' />
        <ServiceCard image={ant} name='Bed Bugs' route='/pestcontrol' />
      </div>
      <div className='ori__pestControl-expect'>
        <div className='ori__pestControl-expect_img'>
          <img />
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
      <Approach />
      <FAQ />
      <Connect />
    </div>
  )
}

export default PestControl