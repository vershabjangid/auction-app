import React from 'react'
import { Field, Form, Formik } from 'formik'
import logo from "../images/logo.png"

export function Otp_Page() {
    return (
        <>
            <section className='login_main  px-1'>
                <section className='login_inner'>
                    <section className='d-flex justify-content-center align-items-start mt-2'>
                        <section className='w-25'> <img src={logo} alt="" className='w-100' /></section>
                    </section>

                    <section className='text-center fs-2 fw-bold text-white'>OTP Verification</section>

                    <Formik
                        initialValues={
                            {
                                otp1:"",
                                otp2:"",
                                otp3:"",
                                otp4:""
                            }
                        }
                    >
                        <Form>
                            <section className='d-flex justify-content-center mt-4'>
                                <Field type="number" className="bg-transparent w-25 mx-4 p-2 border border-2 border-white rounded text-white" name="otp1" />
                                <Field type="number" className="bg-transparent w-25 mx-4 p-2 border border-2 border-white rounded text-white" name="otp2" />
                                <Field type="number" className="bg-transparent w-25 mx-4 p-2 border border-2 border-white rounded text-white" name="otp3" />
                                <Field type="number" className="bg-transparent w-25  mx-4 p-2 border border-2 border-white rounded text-white" name="otp4" />
                            </section>

                            <section className='d-flex justify-content-center align-items-center mt-4 fs-5 text-white'>
                                <button type="submit" className='w-75 py-2 rounded border-0'>Login</button>
                            </section>
                        </Form>
                    </Formik>
                </section>
            </section>
        </>
    )
}
