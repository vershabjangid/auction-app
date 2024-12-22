import React, { useState } from 'react'
import { Header } from '../common/Header'
import { Sidebar } from '../common/Sidebar'
import { FaUser } from 'react-icons/fa'
import { useFormik } from 'formik'
import { useLocation } from 'react-router-dom'
import * as Yup from 'yup'
import axios, { toFormData } from 'axios'
export function AddTeam() {

    let location = useLocation()
    let data = location.state
    console.log(data)


    let filextension = ['image/jpg', 'image/png', 'image/svg', 'image/webp']
    let formik = useFormik({
        initialValues: {
            Tournament_id: data[0]._id,
            Team_Logo: "",
            Team_Name: "",
            Team_Short_Name: "",
            Team_Short_Key: "",
            Team_Points : data[0].Points_Per_Team,
            Team_Total_Player : data[0].Player_Per_Team
        },

        validationSchema: Yup.object().shape({
            Team_Logo: Yup.mixed().test("fileformat", "Unsupported File Format", (value) => filextension.includes(value.type)).required("Team logo is required"),
            Team_Name: Yup.string().required("Team Name is required"),
            Team_Short_Name: Yup.string().required("Team Short Name is required"),
            Team_Short_Key: Yup.string().required("Short Key is required")
        }),

        onSubmit: () => {
            insertteam(formik.values)
        }
    })


    let insertteam = (value) => {
        axios.post('http://localhost:5000/add-team', toFormData(value))
            .then((res) => {
                if (res.data.Status === 1) {
                    console.log(res.data)
                }
                else {
                    console.log(res.data)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    let [auctionlogo, setauctionlogo] = useState('Upload Your Logo')
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
                                    <h1 className=' fw-bold'>Create Team</h1>
                                </div>
                            </div>

                            <form onSubmit={formik.handleSubmit}>
                                <section className='mx-5  my-4'>
                                    <div className=''>
                                        <div className='auction_logo d-flex align-items-center'>
                                            <p className='me-3'>Team Logo*</p>
                                            <div className=' logo_input border border-3 border-white position-relative'>
                                                <div className='logo_input w-100 h-100 position-absolute  d-flex justify-content-center align-items-center fs-2 flex-column'>
                                                    <FaUser className='mb-2' />

                                                    <p className='fs-6 text-center'>{auctionlogo.slice(12, 23)}...</p>
                                                </div>
                                                <input type="file" className='logo_input w-100 h-100 opacity-0' onChange={(e) => (setauctionlogo(e.target.value) || formik.setFieldValue('Team_Logo', e.target.files[0]))} />
                                            </div>
                                        </div>
                                        <div className='text-danger my-2'>{formik.errors.Team_Logo}</div>
                                    </div>

                                    <div className='col-10 my-4'>
                                        <div>Team Name*</div>
                                        <input type='text' className='col-12 my-2 p-2' placeholder='Auction Date' onChange={(e) => formik.setFieldValue('Team_Name', e.target.value)} />
                                        <div className='text-danger my-2'>{formik.errors.Team_Name}</div>
                                    </div>

                                    <div className='col-10 my-4'>
                                        <div>Team Short Name*</div>
                                        <input type='text' className='col-12 my-2 p-2' placeholder='Auction Date' onChange={(e) => formik.setFieldValue('Team_Short_Name', e.target.value)} />
                                        <div className='text-danger my-2'>{formik.errors.Team_Short_Name}</div>
                                    </div>

                                    <div className='col-10'>
                                        <div>Shortcut Key*</div>
                                        <select className='col-12 my-2 p-2' onChange={(e) => formik.setFieldValue('Team_Short_Key', e.target.value)}>
                                            <option>Choose Shortcut</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                            <option value="E">E</option>
                                            <option value="F">F</option>
                                            <option value="G">G</option>
                                            <option value="H">H</option>
                                            <option value="I">I</option>
                                            <option value="J">J</option>
                                            <option value="K">K</option>
                                            <option value="L">L</option>
                                            <option value="M">M</option>
                                            <option value="N">N</option>
                                            <option value="O">O</option>
                                            <option value="P">P</option>
                                            <option value="Q">Q</option>
                                            <option value="R">R</option>
                                            <option value="S">S</option>
                                            <option value="T">T</option>
                                            <option value="U">U</option>
                                            <option value="V">V</option>
                                            <option value="W">W</option>
                                            <option value="X">X</option>
                                            <option value="Y">Y</option>
                                            <option value="Z">Z</option>
                                        </select>
                                        <div className='text-danger my-2'>{formik.errors.Team_Short_Key}</div>
                                    </div>


                                    <button type='submit' className='border-0 col-1 py-2 my-5 rounded fw-bold'>Save</button>
                                </section>
                            </form>


                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
