import React from 'react';
import { useFormikContext } from 'formik'; //uses React Context to pass object

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField( {name, width, ...otherProps} ) { //rest operator ...otherProps
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name) }
                onChangeText={handleChange(name)}
                width={width}
                {...otherProps} //spread operator
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />        
        </>
    );
}

export default AppFormField;