import React from 'react'
import './featureCard.styles.css'


const FeatureCard = ({ image, icon, title, heading, text, reverse }) => {
  return (
    <div className={`ori__features_featureCard ${reverse}`}>
        <div className='ori__features_featureCard-content'>
            <div className='ori__features_featureCard-content_icon'> 
                {icon}
                <h3>{title}</h3>
            </div>
            <div className='ori__features_featureCard-content_text'>
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
        </div>
        <div className='ori__features_featureCard-image'>
            <img src={image} alt={title} />
        </div>
    </div>
  )
}

export default FeatureCard