import React, { useState } from 'react'
import { Sidebar } from '../common/Sidebar'
import { useLocation } from 'react-router-dom'
import { useFormik } from 'formik'
import { FaUser } from 'react-icons/fa'
import { Header } from '../common/Header'

export function AddPlayer () {
  let location = useLocation()
  let data = location.state

  let formik = useFormik({
    initialValues: {
      Profile_Pic: ''
    }
  })

  let [profilepic, setprofilepic] = useState('Upload Your Logo')
  return (
    <>
      <section className='main w-100'>
        <Header />
        <div className=' d-flex justify-content-between'>
          <Sidebar />
          <div className='main_panel w-100'>
            <div className=' py-3 col-12 flex-wrap text-white'>
              <div className='d-flex justify-content-between align-items-center mx-5'>
                <div>
                  <p className=' fs-4 fw-bold m-0'>{data[0].Auction_Name}</p>
                  <h1 className=' fw-bold'>Add Players</h1>
                </div>
              </div>

              <form onSubmit={formik.handleSubmit}>
                <section className='mx-5  my-4'>
                  <div className=''>
                    <div className='auction_logo d-flex align-items-center'>
                      <p className='me-3'>Player Pic*</p>
                      <div className=' logo_input border border-3 border-white position-relative'>
                        <div className='logo_input w-100 h-100 position-absolute  d-flex justify-content-center align-items-center fs-2 flex-column'>
                          <FaUser className='mb-2' />

                          <p className='fs-6 text-center'>
                            {profilepic.slice(12, 23)}...
                          </p>
                        </div>
                        <input
                          type='file'
                          className='logo_input w-100 h-100 opacity-0'
                          onChange={e =>
                            setprofilepic(e.target.value) ||
                            formik.setFieldValue(
                              'Profile_Pic',
                              e.target.files[0]
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className='text-danger my-2'>
                      {formik.errors.Team_Logo}
                    </div>
                  </div>
                </section>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
