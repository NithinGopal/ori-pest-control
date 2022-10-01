import React from 'react'
import Hero from '../../containers/hero/Hero'
import About from '../../containers/about/About'
import Services from '../../containers/services/Services'
import Features from '../../containers/features/Features'
import Blog from '../../containers/blog/Blog'
import FAQ from '../../containers/faq/FAQ'
import CallToAction from '../../containers/callToAction/CallToAction'
import Connect from '../../containers/connect/Connect'
import Guarantee from '../../containers/guarantee/Guarantee'
import Footer from '../../containers/footer/Footer'
import { homeFaq } from '../../assets/textContent/faqContent'
import './home.styles.css'
import Team from '../../containers/team/Team'
import Carousel from '../../containers/carousel/Carousel'

const Home = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <About />
      <Services />
      <Features />
      {/* <Blog /> */}
      <FAQ faqContent={homeFaq} />
      {/* <Team /> */}
      {/* <CallToAction /> */}
      <div className='ori__home-connect'>
        <Connect />
      </div>
      <Guarantee />
    </>
  )
}

export default Home