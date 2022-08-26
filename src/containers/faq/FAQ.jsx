import React from 'react'
import Accordion from '../../components/accordion/Accordion'

import './faq.styles.css'

const FAQ = ({ faqContent }) => {
  return (
    <div className='ori__faq'>
      <div className='ori__faq-heading'>
        <h1>Frequently Asked Ori Pest Service Questions</h1>
      </div>
      <div className='ori__faq-accordian'>
        {
          faqContent.map(faq => (
            <Accordion 
              title={faq.question} 
              content={faq.answer}
            />
          ))
        }
      </div>
    </div>
  )
}

export default FAQ