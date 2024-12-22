import React, { useState } from 'react'
import { Header } from '../common/Header'
import { Sidebar } from '../common/Sidebar'
import { useFormik } from 'formik'
import { FaUser } from 'react-icons/fa'
import axios, { toFormData } from 'axios'
import * as Yup from 'yup';


export function NewAuction() {

    let timestamp = Date.now()
    let currentDate = new Date(timestamp)
    console.log(currentDate.toLocaleDateString())

    let filextension = ['image/jpg', 'image/png', 'image/svg', 'image/webp']
    let formik = useFormik({
        initialValues: {
            User_id: JSON.parse(localStorage.getItem('_id')),
            Auction_Logo: "",
            Sports_Type: "",
            Sports_Season: "",
            Auction_Date: "",
            Auction_Name: "",
            Points_Per_Team: "",
            Base_Bid: "",
            Bid_Increased_By: "",
            Player_Per_Team: "",
            Privacy: "",
            Time: ""
        },

        validationSchema: Yup.object().shape({
            Auction_Logo: Yup.mixed().test("fileFormat",
                "Unsupported file format",
                (value) => filextension.includes(value.type)).required("Auction Logo is required"),
            Sports_Type: Yup.string().required("Sports type is required"),
            Sports_Season: Yup.number().required("Sports season is required"),
            Auction_Date: Yup.string().required("Auction Date is required"),
            Auction_Name: Yup.string().required("Auction name is required"),
            Points_Per_Team: Yup.number().required("Points per team is required"),
            Base_Bid: Yup.number().required("Base bid is required"),
            Bid_Increased_By: Yup.number().required("Bid increased by is required"),
            Player_Per_Team: Yup.number().required("Player per team is required"),
            Privacy: Yup.string().required("Privacy is required"),
            Time: Yup.string().required("Time is required")
        }),

        onSubmit: () => {
            insertdata(formik.values)
        }
    })


    let insertdata = (value) => {
        axios.post('http://localhost:5000/add-auction', toFormData(value), {
            headers: {
                Authorization: JSON.parse(localStorage.getItem('token'))
            }
        })
            .then((res) => {
                console.log(res.data)
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
                            <h1 className='ms-5 fw-bold'>Create Auction</h1>


                            <form onSubmit={formik.handleSubmit}>


                                <section className='mx-5  my-4'>
                                    <div className=''>
                                        <div className='auction_logo d-flex align-items-center'>
                                            <p className='me-3'>Auction Logo*</p>
                                            <div className=' logo_input border border-3 border-white position-relative'>
                                                <div className='logo_input w-100 h-100 position-absolute  d-flex justify-content-center align-items-center fs-2 flex-column'>
                                                    <FaUser className='mb-2' />

                                                    <p className='fs-6 text-center'>{auctionlogo.slice(12, 23)}...</p>
                                                </div>
                                                <input type="file" className='logo_input w-100 h-100 opacity-0' onChange={(e) => (setauctionlogo(e.target.value) || formik.setFieldValue('Auction_Logo', e.target.files[0]))} />
                                            </div>
                                        </div>
                                        <div className='text-danger my-2'>{formik.errors.Auction_Logo}</div>
                                    </div>
                                </section>


                                <section className='mx-5  my-4 d-flex justify-content-between'>
                                    <div className='col-3'>
                                        <div>Sports Type*</div>
                                        <select className='col-12 my-2 p-2' onChange={(e) => formik.setFieldValue('Sports_Type', e.target.value)}>
                                            <option>Choose Sport</option>
                                            <option value="Cricket">Cricket</option>
                                            <option value="Football">Football</option>
                                            <option value="Volleyball">Volleyball</option>
                                            <option value="Tennis">Tennis</option>
                                            <option value="Badminton">Badminton</option>
                                        </select>
                                        <div className='text-danger my-2'>{formik.errors.Sports_Type}</div>
                                    </div>

                                    <div className='col-3'>
                                        <div>Season*</div>
                                        <select className='col-12 my-2 p-2' onChange={(e) => formik.setFieldValue('Sports_Season', e.target.value)}>
                                            <option>Choose Season</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                        <div className='text-danger my-2'>{formik.errors.Sports_Season}</div>
                                    </div>

                                    <div className='col-3'>
                                        <div>Auction Time*</div>
                                        <input type='time' name="Auction_Date" className='col-12 my-2 p-2' placeholder='Auction Date' onChange={(e) => formik.setFieldValue('Time', e.target.value)} />
                                        <div className='text-danger my-2'>{formik.errors.Time}</div>
                                    </div>

                                </section>


                                <section className='mx-5  my-4 d-flex justify-content-between'>
                                    <div className='col-3'>
                                        <div>Auction Date*</div>
                                        <input type='date' name="Auction_Date" className='col-12 my-2 p-2' placeholder='Auction Date' onChange={(e) => formik.setFieldValue('Auction_Date', e.target.value)} />
                                        <div className='text-danger my-2'>{formik.errors.Auction_Date}</div>
                                    </div>


                                    <div className='col-3'>
                                        <div>Auction Name*</div>
                                        <input type='text' className='col-12 my-2 p-2' placeholder='Auction Name' onChange={(e) => formik.setFieldValue('Auction_Name', e.target.value)} />
                                        <div className='text-danger my-2'>{formik.errors.Auction_Name}</div>
                                    </div>

                                    <div className='col-3'>
                                        <div>Points Per Team*</div>
                                        <input type='number' className='col-12 my-2 p-2' placeholder='Auction Date' onChange={(e) => formik.setFieldValue('Points_Per_Team', e.target.value)} />
                                        <div className='text-danger my-2'>{formik.errors.Points_Per_Team}</div>
                                    </div>

                                </section>

                                <section className='mx-5  my-4 d-flex justify-content-between'>
                                    <div className='col-3'>
                                        <div>Base Bid*</div>
                                        <input type='number' className='col-12 my-2 p-2' placeholder='Auction Date' onChange={(e) => formik.setFieldValue('Base_Bid', e.target.value)} />
                                        <div className='text-danger my-2'>{formik.errors.Base_Bid}</div>
                                    </div>


                                    <div className='col-3'>
                                        <div>Bid Increased By*</div>
                                        <input type='number' className='col-12 my-2 p-2' placeholder='Auction Name' onChange={(e) => formik.setFieldValue('Bid_Increased_By', e.target.value)} />
                                        <div className='text-danger my-2'>{formik.errors.Bid_Increased_By}</div>
                                    </div>

                                    <div className='col-3'>
                                        <div>Player Per Team*</div>
                                        <select className='col-12 my-2 p-2' onChange={(e) => formik.setFieldValue('Player_Per_Team', e.target.value)}>
                                            <option>Choose player per team</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                        </select>
                                        <div className='text-danger my-2'>{formik.errors.Player_Per_Team}</div>
                                    </div>

                                </section>

                                <section className='mx-5  my-4 d-flex justify-content-between'>
                                    <div className='col-3'>
                                        <div>Tournament Privacy*</div>
                                        <select className='col-12 my-2 p-2' onChange={(e) => formik.setFieldValue('Privacy', e.target.value)}>
                                            <option>Choose Privacy</option>
                                            <option value="Private">Private</option>
                                            <option value="Public">Public</option>
                                        </select>
                                        <div className='text-danger my-2'>{formik.errors.Privacy}</div>
                                    </div>

                                </section>


                                <section className='mx-5  my-4 d-flex justify-content-center'>
                                    <button type='submit' className='border-0 py-2 px-4 rounded-2 text-white bg-success mx-1'>Save</button>


                                    <button type='reset' className='border-0 py-2 px-4 rounded-2 text-white bg-danger mx-1'>Reset</button>
                                </section>
                            </form>

                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
