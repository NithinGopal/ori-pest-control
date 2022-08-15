import React from 'react'
import './tCScienceCard.styles.css'


const TCScienceCard = ( { title, img, text }) => {
  return (
    <div className='ori__termiteControl-science_content-cards_card'>
        <div className='ori__termiteControl-science_content-cards_card_img'>
            <img src={img} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default TCScienceCard