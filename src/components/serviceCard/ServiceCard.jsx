import React from 'react'
import { Link } from 'react-router-dom'
import './serviceCard.styles.css'

const ServiceCard = ({ image, name, route}) => {
  return (
    <div className='ori__services_serviceCard'>
      <div className='ori__services_serviceCard-image'>
        <img src={image} alt={name} />
      </div>
      <div className='ori__services_serviceCard-content'>
        <p>INSPECTION</p>
        <Link to={route}>{name}</Link>
      </div>
    </div> 
  )
}

export default ServiceCard