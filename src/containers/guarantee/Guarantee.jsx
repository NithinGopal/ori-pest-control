import React from 'react'

import guarantee from '../../assets/guarantee-nobg.png'
import './guarantee.styles.css'

const Guarantee = () => {
  return (
    <div className='ori__guarantee section__padding'>
      <div className='ori__guarantee-image'>
        <img src={guarantee} alt='guarantee'/>
      </div>
      <div className='ori__guarantee-text'>
        <p>
          Ori Pest Cop Guarantee means you can relax knowing 
          we’ll fix your pest problem, and it'll stay nixed. 
          And if pests come back between treatments, so 
          will we — at no additional cost to you.
        </p>
      </div>
    </div>
  )
}

export default Guarantee