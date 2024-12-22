import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../images/logo.png"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Register() {
    let naviget = useNavigate()


    let notificationsuccess = (success) => toast.success(success)
    let notificationerror = (error) => toast.error(error)


    let Insertdata = (value) => {
        axios.post("http://localhost:5000/register", value)
            .then((res) => {
                if (res.data.Status === 1) {
                    notificationsuccess(res.data.Message)
                    naviget("/")
                }
                else {
                    console.log(res.data.Message)
                    notificationerror(res.data.Message)
                }
            })
            .catch((error) => {

                console.log(error)
            })
    }
    return (
        <>
            <section className='login_main  px-1'>
                <section className='border border-3 border-white rounded-3 p-3 bg-white bg-opacity-25 w-[500px]'>
                    <section className='d-flex justify-content-center align-items-start mt-2'>
                        <section className='w-25'> <img src={logo} alt="" className='w-100' /></section>
                    </section>

                    <section className='text-center fs-2 fw-bold text-white'><h1>Register</h1></section>

                    <Formik
                        initialValues={
                            {
                                Name: "",
                                City: "",
                                Phone: "",
                                Password: "",
                                Email: ""
                            }
                        }
                        onSubmit={(value) => {
                            Insertdata(value)
                        }}

                    >
                        <Form>
                            <section className='d-flex justify-content-center mt-4'>
                                <Field type="text" className="bg-transparent w-75 p-2 border border-2 border-white rounded text-white" placeholder="Name" name="Name" />
                            </section>

                            <section className='d-flex justify-content-center mt-4'>
                                <Field type="text" className="bg-transparent w-75 p-2 border border-2 border-white rounded text-white" placeholder="City" name="City" />
                            </section>

                            <section className='d-flex justify-content-center mt-4'>
                                <Field type="Email" className="bg-transparent w-75 p-2 border border-2 border-white rounded text-white" placeholder="Email" name="Email" />
                            </section>

                            <section className='d-flex justify-content-center mt-4'>
                                <Field type="number" className="bg-transparent w-75 p-2 border border-2 border-white rounded text-white" placeholder="Phone Number" name="Phone" />
                            </section>
                            <section className='d-flex justify-content-center mt-4'>
                                <Field type="password" className="bg-transparent w-75 p-2 border border-2 border-white rounded text-white" placeholder="Password" name="Password" />
                            </section>


                            <section className='d-flex justify-content-center align-items-center mt-4 fs-5 text-white'>
                                <button type="submit" className='w-75 py-2 rounded border-0'>Register</button>
                            </section>


                            <section className='d-flex justify-content-center align-items-center mt-4 fs-6 text-white'>
                                Already have an account&nbsp;<Link to={"/"}><span className='text-white text-decoration-underline'>Login</span></Link>
                            </section>
                        </Form>
                    </Formik>
                </section>
            </section>
            <ToastContainer />
        </>
    )
}
