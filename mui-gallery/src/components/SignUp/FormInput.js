import React, { useState } from 'react'
import "./FormInput.css"

const FormInput = (props) => {

    const [focused, setFocused] = useState(false)
    const { label, errorMessage, onChange, id, ...inputProps } = props

    const handleFocus = (e) => {
        setFocused(true);
    }

    return (
        <div className='formInput'>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
                onInvalid={(e) => e.target.setCustomValidity('Please fill in with required info')}
                focused={focused.toString()} />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput