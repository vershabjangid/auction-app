import React from 'react'
import { Field, Form, Formik } from 'formik'
import logo from "../images/logo.png"


export function Change_Password() {
    return (
        <>
            <section className='login_main  px-1'>
                <section className='login_inner'>
                    <section className='d-flex justify-content-center align-items-start mt-2'>
                        <section className='w-25'> <img src={logo} alt="" className='w-100' /></section>
                    </section>

                    <section className='text-center fs-2 fw-bold text-white'><h1>OTP Verification</h1></section>

                    <Formik
                        initialValues={
                            {
                                New_Password: "",
                                Confirm_Password: ""
                            }
                        }
                    >
                        <Form>
                            <section className='d-flex justify-content-center mt-4'>
                                <Field type="text" className="w-75 bg-transparent mx-4 p-2 border border-2 border-white rounded text-white" placeholder="New Password" name="New_Password" />
                            </section>
                            <section className='d-flex justify-content-center mt-4'>
                                <Field type="text" className="w-75 bg-transparent mx-4 p-2 border border-2 border-white rounded text-white" placeholder="Confirm Password" name="Confirm_Password" />
                            </section>

                            <section className='d-flex justify-content-center align-items-center mt-5 fs-5 text-white'>
                                <button type="submit" className='w-75 py-2 rounded border-0'>Change Password</button>
                            </section>
                        </Form>
                    </Formik>
                </section>
            </section>

        </>
    )
}
