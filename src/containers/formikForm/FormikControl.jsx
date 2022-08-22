import React from 'react'
import Checkbox from './Checkbox';
import Date from './Date';
import Input from './Input';
import Select from './Select';

const FormikControl = (props) => {
    const { control, ...rest } = props;

    switch(control) {
        case 'input':
            return <Input {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'checkbox':
            return <Checkbox {...rest} />
        case 'date':
            return <Date {...rest} />
        default: return null
    }
}

export default FormikControl