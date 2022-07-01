import { useState } from 'react';
 
export const useForm = ( initialState ) => {
    
    const [formValue, setValues] = useState(initialState);
    
    const reset = (para) => {
        setValues( para );
    }
 
    const handleInputChange = ({ target }) => {
        setValues({
            ...formValue,
            [ target.name ]: target.value
        });
    }
    return [ formValue, handleInputChange, reset ];
}