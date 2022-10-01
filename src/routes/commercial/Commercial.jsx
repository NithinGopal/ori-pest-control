import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { imageVariants } from '../../assets/imageVariants'
import FAQ from '../../containers/faq/FAQ'
import Connect from '../../containers/connect/Connect'
import QuoteBtn from '../../components/buttons/quoteBtn/QuoteBtn'

import commHero from '../../assets/commercial-imgs/commercial-hero.png'
import commCover from '../../assets/commercial-imgs/commercial-trust-ppe-suit1.png'
import { experts } from './experts'
import { commercialFaq } from '../../assets/textContent/faqContent'
import './commercial.styles.css'

const Commercial = () => {
  return (
    <div className='ori__commercial'>
        <div className='ori__commercial-hero'>
            <div className='ori__commercial-hero_content'>
                <h1>THE <span>MOST TRUSTED</span> PEST CONTROL ACROSS ALL INDUSTRIES</h1>
                {/* <Link to='/contact-page'><button type='button'>Get a Free Quote</button></Link> */}
                <QuoteBtn />
            </div>
            <div className='ori__commercial-hero_img'>
                <motion.img loading='lazy' variants={imageVariants} initial='hidden' animate='visible' src={commHero} alt="comm-hero" />
            </div>
        </div>
        <div className='ori__commercial-expert'>
            <div className='ori__commercial-expert_content'>
                <p>INDUSTRY EXPERTISE</p>
                <h1>Setting the gold standard in commercial pest control</h1>
            </div>
            <div className='ori__commercial-expert_badges'>
                {
                    experts.map(expert => (
                        <div className='ori__commercial-expert_badges-badge'>
                            <img src={expert.img} alt={expert.name} />
                            <h3>{expert.name}</h3>
                        </div>
                    ))
                }
            </div>
            <div className='ori__commercial-coverage'>
                <div className='ori__commercial-coverage_img'>
                    <motion.img variants={imageVariants} initial='hidden' animate='visible' src={commCover} alt="comm-coverage" />
                </div>
                <div className='ori__commercial-coverage_content'>
                    <p>COVERAGE YOU CAN TRUST</p>
                    <h1>Absolute Confidence in Your Pest Control</h1>
                    <p>
                        Ori Pest Cop has established the industry benchmark for 
                        dependability and performance. How? By honouring our 
                        commitments - every day, every service. The pests despise 
                        it, but our consumers adore it.
                    </p>
                </div>
            </div>
        </div>
        <div className='ori__Commercial-FAQ'>
            <FAQ faqContent={commercialFaq} />
        </div>
        <div className='Ori__commercial_contact'>
            <Connect />
        </div>
    </div>
  )
}

export default Commercial