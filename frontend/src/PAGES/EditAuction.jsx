import React from 'react'
import { useFormik } from 'formik'
import axios, { toFormData } from 'axios'
import { Sidebar } from '../common/Sidebar'
import { Header } from '../common/Header'
import { useLocation, useNavigate } from 'react-router-dom'

export function EditAuction() {

    let location = useLocation()
    let data = location.state

    let timestamp = Date.now()
    let currentDate = new Date(timestamp)
    console.log(currentDate.toLocaleDateString())


    let naviget = useNavigate()

    let formik = useFormik({
        initialValues: {
            _id: data._id,
            Sports_Type: data.Sports_Type || "",
            Sports_Season: data.Sports_Season || "",
            Auction_Date: data.Auction_Date || "",
            Auction_Name: data.Auction_Name || "",
            Points_Per_Team: data.Points_Per_Team || "",
            Base_Bid: data.Base_Bid || "",
            Bid_Increased_By: data.Bid_Increased_By || "",
            Player_Per_Team: data.Player_Per_Team || "",
            Privacy: data.Privacy || "",
            Time: data.Time || ""
        },

        onSubmit: () => {
            updatedata(formik.values)
        }
    })


    let updatedata = (value) => {

        axios.put('http://localhost:5000/update-auction', toFormData(value), {
            headers: {
                Authorization: JSON.parse(localStorage.getItem('token'))
            }
        })
            .then((res) => {
                if (res.data.Status === 1) {
                    naviget('/my-auction')
                }
                else {
                    console.log(res.data)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <section className='main w-100'>
                <Header />

                <div className=' d-flex justify-content-between'>
                    <Sidebar />
                    <div className='main_panel w-100'>
                        <div className=' py-3 col-12 flex-wrap text-white'>
                            <h1 className='ms-5 fw-bold'>Edit Auction</h1>


                            <form onSubmit={formik.handleSubmit}>


                                <section className='mx-5  my-4 d-flex justify-content-between'>
                                    <div className='col-3'>
                                        <div>Sports Type*</div>
                                        <select defaultValue={data.Sports_Type} className='col-12 my-2 p-2' onChange={(e) => formik.setFieldValue('Sports_Type', e.target.value)}>
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
                                        <select defaultValue={data.Sports_Season} className='col-12 my-2 p-2' onChange={(e) => formik.setFieldValue('Sports_Season', e.target.value)}>
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
                                        <input type='time' defaultValue={data.Time} name="Auction_Date" className='col-12 my-2 p-2' placeholder='Auction Date' onChange={(e) => formik.setFieldValue('Time', e.target.value)} />
                                        <div className='text-danger my-2'>{formik.errors.Time}</div>
                                    </div>

                                </section>


                                <section className='mx-5  my-4 d-flex justify-content-between'>
                                    <div className='col-3'>
                                        <div>Auction Date*</div>
                                        <input type='date' defaultValue={data.Auction_Date} name="Auction_Date" className='col-12 my-2 p-2' placeholder='Auction Date' onChange={(e) => formik.setFieldValue('Auction_Date', e.target.value)} />
                                        <div className='text-danger my-2'>{formik.errors.Auction_Date}</div>
                                    </div>


                                    <div className='col-3'>
                                        <div>Auction Name*</div>
                                        <input type='text' defaultValue={data.Auction_Name} className='col-12 my-2 p-2' placeholder='Auction Name' onChange={(e) => formik.setFieldValue('Auction_Name', e.target.value)} />
                                        <div className='text-danger my-2'>{formik.errors.Auction_Name}</div>
                                    </div>

                                    <div className='col-3'>
                                        <div>Points Per Team*</div>
                                        <input type='number' defaultValue={data.Points_Per_Team} className='col-12 my-2 p-2' placeholder='Auction Date' onChange={(e) => formik.setFieldValue('Points_Per_Team', e.target.value)} />
                                        <div className='text-danger my-2'>{formik.errors.Points_Per_Team}</div>
                                    </div>

                                </section>

                                <section className='mx-5  my-4 d-flex justify-content-between'>
                                    <div className='col-3'>
                                        <div>Base Bid*</div>
                                        <input type='number' defaultValue={data.Base_Bid} className='col-12 my-2 p-2' placeholder='' onChange={(e) => formik.setFieldValue('Base_Bid', e.target.value)} />
                                        <div className='text-danger my-2'>{formik.errors.Base_Bid}</div>
                                    </div>


                                    <div className='col-3'>
                                        <div>Bid Increased By*</div>
                                        <input type='number' defaultValue={data.Bid_Increased_By} className='col-12 my-2 p-2' placeholder='Auction Name' onChange={(e) => formik.setFieldValue('Bid_Increased_By', e.target.value)} />
                                        <div className='text-danger my-2'>{formik.errors.Bid_Increased_By}</div>
                                    </div>

                                    <div className='col-3'>
                                        <div>Player Per Team*</div>
                                        <select className='col-12 my-2 p-2' defaultValue={data.Player_Per_Team} onChange={(e) => formik.setFieldValue('Player_Per_Team', e.target.value)}>
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
                                        <select className='col-12 my-2 p-2' defaultValue={data.Privacy} onChange={(e) => formik.setFieldValue('Privacy', e.target.value)}>
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
