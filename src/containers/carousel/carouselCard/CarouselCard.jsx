import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import './carouselCard.styles.css'

const CarouselCard = ({ name, review, source, date}) => {
  return (
    <div className='carouselCard'>
        <div className='carouselCard-rating'>
            <BsFillStarFill size={52} color='yellow' />
            <BsFillStarFill size={52} color='yellow' />
            <BsFillStarFill size={52} color='yellow' />
            <BsFillStarFill size={52} color='yellow' />
            <BsFillStarFill size={52} color='yellow' />
        </div>
        <p className='carouselCard-review'>{review}</p>
        <div className='carouselCard-user'>
            <h3>- {name},</h3>
            <p>{date}</p>   
        </div>        
    </div>
  )
}

export default CarouselCard