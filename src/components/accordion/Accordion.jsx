import React, { useState, useRef } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import './accordion.styles.css'

const Accordion = (props) => {
  const [activeState, setActiveState] = useState('');
  const [height, setHeight] = useState('0px');
  const [rotateIcon, setRotateIcon] = useState("accordion__icon");

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(activeState === '' ? 'active' : '')
    // console.log(content.current.scrollHeight);
    setHeight(
      activeState === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );

    setRotateIcon(
      activeState === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }
  return (
    <div className='accordion__section'>
        <button className={`accordion ${activeState}`} onClick={toggleAccordion}>
            <p className='accordion__title'>{props.title}</p>
            <FaChevronRight className={`${rotateIcon}`} />
        </button>
        <div 
          ref={content} 
          style={{ maxHeight : height}} 
          className='accordion__content' 
        >
            <div 
                className='accordion__text' 
                dangerouslySetInnerHTML={{__html: props.content}}
            />
        </div>
    </div>
  )
}

export default Accordion