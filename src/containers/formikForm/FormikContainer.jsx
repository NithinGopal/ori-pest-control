import React from 'react'
import emailjs from '@emailjs/browser';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

import './formikForm.styles.css'


const FormikContainer = () => {

    const serviceTypeOptions = [
        { key: 'Select a Service', value: ''},
        { key: 'Termites', value: 'termites'},
        { key: 'Cockroaches', value: 'cockroaches'},
        { key: 'Rats', value: 'rats'},
        { key: 'Mosquitos', value: 'mosquitos'},
        { key: 'Bed Bugs', value: 'bed-bugs'},
        { key: 'Ants', value: 'ants'},
        { key: 'Houseflies', value: 'house-flies'},
        { key: 'Silver Fish', value: 'silver-fish'},
        { key: 'Honey Bees', value: 'honey-bees'},
        { key: 'Lizards', value: 'lizards'},
        { key: 'Spiders', value: 'spiders'},
        { key: 'Snakes', value: 'snakes'},
        { key: 'Birds', value: 'birds'},
    ]
    
    const initialValues = {
        serviceType: '',
        email: '',
        fullName: '',
        phoneNumber: '',
        termsAccepted: false,
        date: null,
    }

    const validationSchema = Yup.object({
        serviceType: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        phoneNumber: Yup.string().required('Required'),
        fullName: Yup.string().required('Required'),
        termsAccepted: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
        // date: Yup.date().required('Required').nullable(),
    })

    const sendEmail = (values) => {
        const templateParams = {
            from_name: values.fullName,
            email: values.email,
            message: `Name : ${values.fullName}
                ServiceType: ${values.serviceType}
                Phone : ${values.phoneNumber} 
                Email: ${values.email}`,
            phone: values.phoneNumber,
            serviceType: values.serviceType, 
        }
        emailjs.send('service_3odnh8n', 'template_mocbin8', templateParams, 'DLChyeqWTyfkkvKbE')
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }

    const onSubmit = (values, onSubmitProps) => {
        console.log('Form Data', values)
        // console.log('Submit Props', onSubmitProps);
        onSubmitProps.setSubmitting(false);
        sendEmail(values);
        onSubmitProps.resetForm();
    }

  return (
    <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema} 
        onSubmit={onSubmit}
    >
        {
            formik => (
                <Form>
                    <FormikControl 
                        control='select'
                        label='Select Service Type'
                        name='serviceType' 
                        options={serviceTypeOptions}
                    />

                    <FormikControl 
                        control='input' 
                        type='text'
                        label='Full Name'
                        name='fullName' 
                        placeholder='Full Name'
                    />

                    <FormikControl 
                        control='input' 
                        type='email' 
                        label='Email' 
                        name='email' 
                        placeholder='username@email.com'
                    />

                    <FormikControl 
                        control='input' 
                        type='text'
                        label='Phone Number' 
                        name='phoneNumber' 
                        placeholder='Phone Number'
                    />

                    <FormikControl 
                        control='checkbox' 
                        label='Accept Terms & Conditions' 
                        name='termsAccepted' 

                    />
                    
                    <button type='submit'>Submit</button>
                </Form>
            )
        }
    </Formik>
  )
}

export default FormikContainer