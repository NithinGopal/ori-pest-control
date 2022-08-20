import React from 'react'
import Accordion from '../../components/accordion/Accordion'
import './faq.styles.css'

const FAQ = () => {
  return (
    <div className='ori__faq'>
      <div className='ori__faq-heading'>
        <h1>Frequently Asked Ori Pest Service Questions</h1>
      </div>
      <div className='ori__faq-accordian'>
        <Accordion
        title="What does Ori Pest Cop do?"
        content="Ori Pest Cop is a pest and termite control company with certified technicians. Our friendly, expertly-trained local exterminators are here to help protect your home, and our pest control services are designed to make your life easier, 365 days a year. Schedule a free inspection today."
        />
        <Accordion
          title="How do I pay my pest control bill?"
          content="We accept both cash and all types of online payment methods"
        />
        <Accordion
          title="Is getting pest control worth it?"
          content="Absolutely! Regular pest control saves a lot of money in the long term."
        />
        <Accordion
          title="Is a Ori Pest Cop inspection free?"
          content="Yes, initial pest control and termite inspections from Ori Pest Cop are FREE. Once our experts arrive at your home, they'll create a customized plan to fit your specific need. You can get started with a free inspection today."
        />
      </div>
    </div>
  )
}

export default FAQ