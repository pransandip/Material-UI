import React, { useState } from 'react'
import "./FormInput.css"

const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const { label, errorMessage, onChange, id, ...inputProps } = props

    const handleFocus = (e) => {
        setFocused(true)
    }

    return (
        <div className='formInput'>
            {/* <label>Username</label> */}
            {/* <input placeholder={props.placeholder} onChange={e => props.setUsername(e.target.value)} /> */}
            {/* <input ref={props.refer} placeholder={props.placeholder} /> */}
            {/* <input type={props.type} name={props.name} placeholder={props.placeholder} /> */}
            <label htmlFor={id}>{label}</label>
            <input id={id} {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput