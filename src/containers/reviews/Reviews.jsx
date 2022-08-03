import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import data from '../../assets/reviews';
import ReviewSlide from '../../components/reviewSlide/ReviewSlide';
import './reviews.styles.css';

const Reviews = () => {
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);
  console.log(reviews);

  useEffect(() => {
    const lastIndex = reviews.length - 1
      if (index < 0) {
        setIndex(lastIndex)
        }
      if (index > lastIndex){
        setIndex(0)
        }
     }, [index, reviews])
  
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
     }, 5000);
      return () => clearInterval(slider)
     }, [index])

  return (
    <div className='ori__reviews'>
      <div className='ori__reviews-title'>
        <h2>Reviews</h2>
        <div className='ori__reviews-title_underline'></div>
      </div>
      <div className='ori__reviews-center'>
        {
          reviews.map((review, reviewIndex) => {
            return <ReviewSlide 
                      key={review.id} 
                      {...review} 
                      reviewIndex={reviewIndex} 
                      index={index} 
                    />
          })
        }
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Reviews