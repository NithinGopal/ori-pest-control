import React from 'react'
import AboutBadge from '../../components/aboutBadge/AboutBadge'
import './about.styles.css'

const About = () => {
  return (
    <div className='ori__about'>
      <div className='ori__about-content'>
        <div className='ori__about-content_heading'>
          <h1>Ori Pest Cop is the best way to fix your pest problems</h1>
        </div>
        <div className='ori__about-content_text'>
          <p>
            For more than 500+ home, we’ve protected what's most valuable to you, 
            with local specialists who go above and beyond to fix your problem and 
            services designed to make your life easier, 365 days a year. So when you 
            trust Ori Pest Cop to fix your pest problem, it's not just a promise. It's a guarantee.
          </p>
        </div>
      </div>
      <div className='ori__about-cards'>
        <AboutBadge />
      </div>
    </div>
  )
}

export default About 