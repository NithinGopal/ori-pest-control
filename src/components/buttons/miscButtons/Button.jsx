import React from 'react'
import './button.styles.css'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='ori__button'>
        {text}
    </button>
  )
}

export default Button