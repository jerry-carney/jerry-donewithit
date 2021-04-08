import React from 'react';
import { useFormikContext } from 'formik'; //uses React Context to pass object

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField( {name, width, ...otherProps} ) { //rest operator ...otherProps
    const {
        setFieldTouched,
        setFieldValue,
        errors,
        touched,
        values,
    } = useFormikContext();

    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name) }
                onChangeText={text => setFieldValue(name, text)}
                value={values[name]}
                width={width}
                {...otherProps} //spread operator
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />        
        </>
    );
}

export default AppFormField;