import React from 'react'
import { FaQuoteRight } from 'react-icons/fa';
import reviews from '../../assets/reviews';
import './reviewSlide.styles.css'

const ReviewSlide = ({id, name, title, quote, reviewIndex, index}) => {
    let position = 'nextSlide';

    if (reviewIndex === index) {
        position = 'activeSlide';
    };

    if (reviewIndex === index - 1 || (index ===0 && reviewIndex === reviews.length -1)) {
        position = 'lastSlide'
    }

  return (
    <div className={position} key={id}>
        <h4>{name}</h4>
        <p className='title'>{title}</p>
        <p className='text'>{quote}</p>
        <FaQuoteRight className='icon' />
    </div>
  )
}

export default ReviewSlide