import React from 'react'
import { Field, Form, Formik } from 'formik'
import logo from "../images/logo.png"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export function ForgotPassword() {
    let naviget = useNavigate();

    let notificationerror = (error) => toast.error(error)

    let Insertdata = (value) => {
        axios.post("http://localhost:5000/forgot-email", value)
            .then((res) => {
                console.log(res.data)
                if (res.data.Status === 0) {
                    notificationerror(res.data.Message)
                }
                else {
                    naviget("/otp-verification")
                }
            })
            .catch((error) => {

                console.log(error)
            })
    }

    return (
        <>
            <section className='login_main  px-1'>
                <section className='login_inner'>
                    <section className='d-flex justify-content-center align-items-start mt-2'>
                        <section className='w-25'> <img src={logo} alt="" className='w-100' /></section>
                    </section>

                    <section className='text-center fs-2 fw-bold text-white'><h1>Forgot Password</h1></section>

                    <Formik
                        initialValues={
                            {
                                Email: ""
                            }
                        }

                        onSubmit={(value) => {
                            Insertdata(value)
                        }}
                    >
                        <Form>
                            <section className='d-flex justify-content-center mt-4'>
                                <Field type="email" className="bg-transparent w-75 p-2 border border-2 border-white rounded text-white" placeholder="Email Address" name="Email" />
                            </section>

                            <section className='d-flex justify-content-center align-items-center mt-4 fs-5 text-white'>
                                <button type="submit" className='w-75 py-2 rounded border-0'>Next</button>
                            </section>

                            <section className='d-flex justify-content-center align-items-center mt-4 fs-6 text-white'>
                                Remember the password&nbsp;<span className='text-black'>
                                    <Link to={"/"} className='text-white fw-bold text-decoration-none'>
                                        Login
                                    </Link>
                                </span>
                            </section>
                        </Form>
                    </Formik>
                </section>
            </section>
            <ToastContainer />
        </>
    )
}
