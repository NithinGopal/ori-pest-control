import React from 'react'
import { ImBug } from 'react-icons/im'
import './heroButton.styles.css'

const HeroButton = ({ icon, text, onClick}) => {
  return (
    <button onClick={onClick} className='ori__heroButton'>
      {/* <ImBug size={20} color='#002f47' /> */}
      {icon}
      <p>{text}</p>
    </button>
  )
}

export default HeroButton