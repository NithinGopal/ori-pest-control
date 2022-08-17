import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import './contactForm.styles.css'

const ContactForm = () => {
  return (
    <Formik 
        initialValues={{
            serviceType: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
            date: '',
            acceptedTerms: false,
        }} 
        validationSchema={Yup.object({
            firstName: Yup.string()
                .max(20, 'Must be 15 characters or fewer')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or fewer')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            serviceType: Yup.string()
                .oneOf(
                    ['Termite Control', 'Pest Control'], 
                    'Invalid Service Type'
                )
                .required('Required'),
            acceptedTerms: Yup.boolean()
                    .required('Required')
                    .oneOf([true], 'You must accept the terms and conditions.'),
        })} 
        onSubmit={(values, { setSubmitting }) => {
            // alert(JSON.stringify(values, null, 2));
            console.log('Customer Details', values)
        }}
    >
        <Form>
            <Field name='serviceType' as='select'>
                <option value="">Select a Service Type</option>
                <option value='Termite Control'>Termite Control</option>
                <option value='Pest Control'>Pest Control</option>
            </Field>
            <label htmlFor='firstName'>First Name</label>
            <Field name='firstName' type='text' placeholder='First Name' />
            <ErrorMessage name='firstName' />

            <label htmlFor='lastName'>Last Name</label>
            <Field name='lastName' type='text' placeholder='Last Name' />
            <ErrorMessage name='lastName' />

            <label htmlFor='email'>Email Address</label>
            <Field name='email' type='email' placeholder='username@example.com' />
            <ErrorMessage name='email' />
            <div className='terms'>
                <Field name='acceptedTerms' type='checkbox' />
                <p>Accept Terms & Conditions</p>
            </div>
            <button type='submit'>Submit</button>
        </Form>
    </Formik>
  )
}

export default ContactForm