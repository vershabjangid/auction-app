import React from 'react'
import logo from "../images/logo.png"
import { Field, Form, Formik } from 'formik'
import { Link } from 'react-router-dom'

export function Login_Pages() {
    return (
        <>
                <section className='login_main  px-1'>
                    <section className='login_inner'>
                        <section className='d-flex justify-content-center align-items-start mt-2'>
                            <section className='w-25'> <img src={logo} alt="" className='w-100' /></section>
                        </section>

                        <section className='text-center fs-2 fw-bold text-white'>LOGIN</section>

                        <Formik
                            initialValues={
                                {
                                    Mobile_No: "",
                                    Password: "",
                                    Remember: false
                                }
                            }
                        >
                            <Form>
                                <section className='d-flex justify-content-center mt-4'>
                                    <Field type="number" className="bg-transparent w-75 p-2 border border-2 border-white rounded text-white" placeholder="Phone Number" name="Mobile_No" />
                                </section>
                                <section className='d-flex justify-content-center mt-3'>
                                    <Field type="password" className="bg-transparent w-75 p-2 border border-2 border-white rounded text-white" placeholder="Password" name="Password" />
                                </section>

                                <section className='d-flex justify-content-evenly align-items-center mt-4 fs-6 text-white'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <Field type="checkbox" className="remember_check border border-2 border-white rounded me-2" name="Remember" />
                                        Remember Me
                                    </div>

                                    <div className='d-flex justify-content-center align-items-center'>
                                       <Link to={"/forgot-password"}> Forgot Password?</Link>
                                    </div>
                                </section>

                                <section className='d-flex justify-content-center align-items-center mt-4 fs-5 text-white'>
                                    <button type="submit" className='w-75 py-2 rounded border-0'>Login</button>
                                </section>


                                <section className='d-flex justify-content-center align-items-center mt-4 fs-6 text-white'>
                                    Don't have an account&nbsp;<span className='text-black text-decoration-underline'>Register</span>
                                </section>
                            </Form>
                        </Formik>
                    </section>
                </section>
        </>
    )
}
