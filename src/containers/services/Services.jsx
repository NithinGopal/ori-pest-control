import React from 'react'
import { motion } from 'framer-motion'
import { imageVariants } from '../../assets/imageVariants'

import ServiceCard from '../../components/serviceCard/ServiceCard'

import services from '../../assets/servicesAssets/services-nobg.png'
import termite from '../../assets/servicesAssets/termite-gr.png'
import bedbug from '../../assets/servicesAssets/bedbug-gr.png'
import ticks from '../../assets/servicesAssets/tick-gr.png'
import ant from '../../assets/servicesAssets/ant-gr.png'
import cockroach from '../../assets/servicesAssets/cockroach-gr.png'
import rat from '../../assets/servicesAssets/rat-gr.png'
import spider from '../../assets/servicesAssets/spider-gr.png'
import './services.styles.css'

const Services = () => {
  return (
    <div className='ori__services'>
      <div className='ori__services-image'>
        <motion.img loading='lazy' variants={imageVariants} initial='hidden' animate='visible' src={services} alt='services' />
      </div>
      <div className='ori__services_content'>
        <h1>We’ll fix what’s pestering you.</h1>
        <p>
            We fix all sorts of pests – guaranteed – using 
            the most advanced products and technologies on the market, 
            many of which we invented. Our experts treat problems at 
            the colony level and can even predict local pest behavior 
            based on climate and weather patterns. And now that you can 
            schedule inspections and buy services online, it’s easier 
            than ever to nix your pest problem.
        </p>
        <div className='ori__services_content-serviceCards'>
          <ServiceCard image={termite} name='Termite' route='/termitecontrol' />
          <ServiceCard image={bedbug} name='Bed Bugs' route='/pestcontrol' />
          <ServiceCard image={ticks} name='Ticks' route='/pestcontrol' />
          <ServiceCard image={rat} name='Rats/Mice' route='/pestcontrol' />
          <ServiceCard image={cockroach} name='Cockroach' route='/pestcontrol' />
          <ServiceCard image={spider} name='Spiders' route='/pestcontrol' />
          <ServiceCard image={ant} name='Bed Bugs' route='/pestcontrol' />
        </div>
      </div>
    </div>
  )
}

export default Services