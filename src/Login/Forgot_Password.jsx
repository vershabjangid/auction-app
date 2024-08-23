import React from 'react'
import { Field, Form, Formik } from 'formik'
import logo from "../images/logo.png"
import { useNavigate } from 'react-router-dom'

export function Forgot_Password() {
    let naviget = useNavigate();

    let changepage = () => {
        naviget('/otp-verification')
    }

    return (
        <>
            <section className='login_main  px-1'>
                <section className='login_inner'>
                    <section className='d-flex justify-content-center align-items-start mt-2'>
                        <section className='w-25'> <img src={logo} alt="" className='w-100' /></section>
                    </section>

                    <section className='text-center fs-2 fw-bold text-white'>Forgot Password</section>

                    <Formik
                        initialValues={
                            {
                                Email: ""
                            }
                        }
                    >
                        <Form>
                            <section className='d-flex justify-content-center mt-4'>
                                <Field type="email" className="bg-transparent w-75 p-2 border border-2 border-white rounded text-white" placeholder="Email Address" name="Mobile_No" />
                            </section>

                            <section className='d-flex justify-content-center align-items-center mt-4 fs-5 text-white'>
                                <button type="submit" className='w-75 py-2 rounded border-0' onClick={changepage}>Next</button>
                            </section>

                            <section className='d-flex justify-content-center align-items-center mt-4 fs-6 text-white'>
                                Remember the password&nbsp;<span className='text-black text-decoration-underline'>Login</span>
                            </section>
                        </Form>
                    </Formik>
                </section>
            </section>

        </>
    )
}
