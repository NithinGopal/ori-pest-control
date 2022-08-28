import React from 'react'
import FeatureCard from '../../components/featureCard/FeatureCard'
import { FaHandshake } from 'react-icons/fa'
import { BiSearchAlt, BiNotepad } from 'react-icons/bi'

import service from '../../assets/featureAssets/ppe-suit3.png'
import inspection from '../../assets/featureAssets/inspection.png'
import billing from '../../assets/featureAssets/billing.png'
import partners from '../../assets/featureAssets/partners.png'
import './features.styles.css'

const Features = () => {
  return (
    <div className='ori__features section__margin'>
      <h1>A pest control process you can trust.</h1>
      <FeatureCard 
        image={service} 
        icon={<FaHandshake size={40} color='#93acb5' />} 
        title='Serve' 
        heading='Service on your time.'
        text={`With online scheduling and account management, 
          24/7 customer support and on-our-way text alerts, 
          we work around your schedule, not the other way around.`}
      />
      <FeatureCard 
        image={inspection} 
        icon={<BiSearchAlt size={40} color='#93acb5' />} 
        title='Inspect' 
        heading='Pest control inspection done right.'
        text={`Our experts are trained in your local pest populations 
          to identify your infestation, spot existing and potential issues 
          and deliver the best, most comprehensive treatments that start 
          working immediately.`} 
        reverse= 'reverse' 
      />
      <FeatureCard 
        image={billing} 
        icon={<BiNotepad size={40} color='#93acb5' />} 
        title='Advise' 
        heading='Customized treatment plans'
        text={`We’ll explain your pest problem in plain language and work 
          with you to develop your own customized solution to nix your pests 
          and keep them from coming back, 365 days a year.`}
      />
      <FeatureCard 
        image={partners} 
        icon={<FaHandshake size={40} color='#93acb5' />} 
        title='Partner' 
        heading='Your pest-free partners.'
        text={`Once we start treatment, you can relax. We guarantee we’ll nix 
          your pests and keep them from coming back. Or we'll come back between 
          treatments at no additional cost to you.`}
          reverse= 'reverse' 
      />
    </div>
  )
}

export default Features