import React from 'react'
import Hero from '../../containers/hero/Hero'
import About from '../../containers/about/About'
import Services from '../../containers/services/Services'
import Features from '../../containers/features/Features'
import Reviews from '../../containers/reviews/Reviews'
import Blog from '../../containers/blog/Blog'
import FAQ from '../../containers/faq/FAQ'
import CallToAction from '../../containers/callToAction/CallToAction'
import Guarantee from '../../containers/guarantee/Guarantee'
import Footer from '../../containers/footer/Footer'
import './home.styles.css'
import Team from '../../containers/team/Team'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Features />
      {/* <Reviews /> */}
      {/* <Blog /> */}
      <FAQ />
      {/* <Team /> */}
      <CallToAction />
      <Guarantee />
      {/* <Footer /> */}
    </>
  )
}

export default Home