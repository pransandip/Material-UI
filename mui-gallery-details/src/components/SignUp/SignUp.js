import React, { useRef, useState } from 'react'
import FormInput from './FormInput'
import './SignUp.css'

const SignUp = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        fullname: "",
        dob: "",
        password: "",
        confirmPassword: ""
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "Email",
            errorMessage: "It should be a valid email address!",
            required: true,
        },
        {
            id: 3,
            name: "fullname",
            type: "text",
            placeholder: "Full Name",
            label: "Full Name",
            errorMessage: "Please enter your full Name!",
            required: true,
        },
        {
            id: 4,
            name: "dob",
            type: "date",
            placeholder: "DOB",
            label: "DOB"
        },
        {
            id: 5,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 6,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            label: "Confirm Password",
            errorMessage: "Passwords don't match!",
            pattern: values.password,
            required: true,
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    // const usernameRef = useRef()
    // console.log(values)

    return (
        <div className='formStyle'>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {/* <FormInput placeholder="Username" setUsername={setUsername} /> */}
                {/* <FormInput refer={usernameRef} placeholder="Username" /> */}
                {/* <FormInput name="email" placeholder="Email" /> */}
                {/* <FormInput name="fullname" placeholder="Full Name" /> */}
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUp;