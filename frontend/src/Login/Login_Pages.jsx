import logo from "../images/logo.png"
import { Field, Form, Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

export function LoginPages() {

    let notificationerror = (error) => toast.error(error)

    let naviget = useNavigate();
    localStorage.clear()

    let Insertdata = (value) => {
        axios.post("http://localhost:5000/login", value)
            .then((res) => {
                if (res.data.Status === 0) {
                    notificationerror(res.data.Message)
                }
                else {

                    console.log(res.data)
                    localStorage.setItem("token", JSON.stringify(res.data.token))
                    localStorage.setItem("_id", JSON.stringify(res.data.viewdata[0]._id))
                    naviget("/dashboard")
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

                    <section className='text-center fs-2 fw-bold text-white'><h1>LOGIN</h1></section>

                    <Formik
                        initialValues={
                            {
                                Phone: "",
                                Password: ""
                            }
                        }

                        onSubmit={(value) => {
                            Insertdata(value)
                        }}
                    >
                        <Form>
                            <section className='d-flex justify-content-center mt-4'>
                                <Field type="number" className="bg-transparent w-75 p-2 border border-2 border-white rounded text-white" placeholder="Phone Number" name="Phone" />
                            </section>
                            <section className='d-flex justify-content-center mt-3'>
                                <Field type="password" className="bg-transparent w-75 p-2 border border-2 border-white rounded text-white" placeholder="Password" name="Password" />
                            </section>

                            <section className='d-flex justify-content-center align-items mt-4 fs-6 text-white'>
                                <div className='d-flex align-items-center w-75'>
                                    <Link to={"/forgot-password"} className='text-decoration-none text-white'> Forgot Password?</Link>
                                </div>
                            </section>

                            <section className='d-flex justify-content-center align-items-center mt-4 fs-5 text-white'>
                                <button type="submit" className='w-75 py-2 rounded border-0'>Login</button>
                            </section>


                            <section className='d-flex justify-content-center align-items-center mt-4 fs-6 text-white'>
                                Don't have an account&nbsp;<Link to={"/register"} className='text-decoration-none fw-bold'><span className='text-white'>Register</span></Link>
                            </section>
                        </Form>
                    </Formik>
                </section>
            </section>
            <ToastContainer />
        </>
    )
}
