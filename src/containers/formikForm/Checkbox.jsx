import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const Checkbox = (props) => {
    const { label, name, ...rest } = props;

  return (
    <div className='form-control'>
      <div className='checkbox'>
        <Field type='checkbox' name={name} />
        {label}
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Checkbox