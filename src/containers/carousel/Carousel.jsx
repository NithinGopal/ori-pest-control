import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './carousel.styles.css'
// import images from '../../assets/images';
import CarouselCard from './carouselCard/CarouselCard';
import { customerReviews } from './carouselData';

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])

  return (
    <motion.div ref={carousel} className='carousel'>
      <h1>Reviews</h1>
      <motion.div drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: "grabbing"}} className='inner-carousel'>
        {customerReviews.map(review => {
          return (
            <motion.div key={review.index} className="item">
              <CarouselCard name={review.name} review={review.review} date={review.date}  />
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default Carousel