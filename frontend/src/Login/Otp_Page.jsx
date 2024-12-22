import logo from "../images/logo.png"
import { useLocation, useNavigate } from 'react-router-dom'

export function OtpPage() {

    let location = useLocation()
    let data = location.state
    console.log(data)

    let naviget = useNavigate();

    setTimeout(() => {
        naviget('/')
    }, 10000)
    return (
        <>
            <section className='login_main  px-1'>
                <section className=''>
                    <section className='d-flex justify-content-center align-items-start mt-2'>
                        <section className='w-25'> <img src={logo} alt="" className='w-100' /></section>
                    </section>

                    <section className='text-center fs-2 fw-bold text-white'><h1>Password Sended</h1></section>


                    <section className='d-flex justify-content-center mt-4'>
                        <p className="w-75 fs-5 text-center text-white">Your password has been successfully sent to the email address associated with your account. Please check your inbox and, if necessary, your spam or junk folder.</p>
                    </section>


                </section>
            </section>
        </>
    )
}
