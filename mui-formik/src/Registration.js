import React from 'react'
import { Wrapper } from './styles/Wrapper'
import { GlobalStyle } from './styles/GlobalStyles'
import { useFormik } from 'formik'

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
}

const Registration = () => {

    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: (val) => {
            console.log(val)
        }
    })

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <div className="container">
                    <div className="modal">
                        <div className="modal-container">
                            <div className="modal-left">
                                <h1 className="modal-title">Welcome!</h1>
                                <p className="modal-desc">
                                    To Formik & yup validation testing page.
                                </p>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-block">
                                        <label htmlFor="name" className="input-label">
                                            Name
                                        </label>
                                        <input
                                            type="name"
                                            autoComplete="off"
                                            name="name"
                                            id="name"
                                            placeholder="Name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="email" className="input-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            autoComplete="off"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="password" className="input-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            autoComplete="off"
                                            name="password"
                                            id="password"
                                            placeholder="Password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="confirm_password" className="input-label">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            autoComplete="off"
                                            name="confirm_password"
                                            id="confirm_password"
                                            placeholder="Confirm Password"
                                            value={values.confirm_password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    <div className="modal-buttons">
                                        <a href="#" className="">
                                            Want to register using Gmail?
                                        </a>
                                        <button className="input-button" type="submit">
                                            Registration
                                        </button>
                                    </div>
                                </form>
                                <p className="sign-up">
                                    Already have an account? <a href="#">Sign In now</a>
                                </p>
                            </div>
                            <div className="modal-right">
                                <img
                                    src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Registration