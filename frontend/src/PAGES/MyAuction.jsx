import React, { useEffect, useState } from 'react'
import { Header } from '../common/Header'
import { Sidebar } from '../common/Sidebar'
import axios from 'axios'
import { FaCalendar } from 'react-icons/fa'
import { RiDeleteBinLine, RiTeamFill } from 'react-icons/ri'
import { MdOutlineEdit } from 'react-icons/md'
import { IoMdPersonAdd } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

export function MyAuction() {

    let [viewmyauctions, setviewmyauctions] = useState([])
    let [imgurl, setimgurl] = useState('');


    let viewdata = () => {
        axios.get('http://localhost:5000/view-auction', {
            headers: {
                Authorization: JSON.parse(localStorage.getItem('token'))
            }
        })
            .then((res) => {
                setviewmyauctions(res.data.viewauction.filter((value) => JSON.parse(localStorage.getItem('_id')) === value.User_id))
                setimgurl(res.data.imgurl)
            })
    }
    useEffect(() => {
        viewdata();
    }, [])


    let [modal, setmodal] = useState(false)
    let [deletingdata, setdeletingdata] = useState('')

    let deleting = (value) => {

        axios.delete('http://localhost:5000/delete-auction', { data: value })
            .then((res) => {
                console.log(res)
                setmodal(false)
                viewdata()
            })
            .catch((error) => {
                console.log(error)
            })
    }


    let naviget = useNavigate()

    let editnaviget = (value) => {
        naviget('/edit-auction', { state: value })
    }

    let auctiondetails = (value) => {
        naviget('/auction-detail', { state: [value, imgurl] })
    }
    return (
        <>

            {
                modal ? <section className='delete_model'>
                    <div className='col-4 py-4 bg-white rounded-3'>
                        <div className='my-3'>
                            <p className='text-center'>Are you sure want to delete</p>
                        </div>
                        <div className='d-flex justify-content-evenly my-4'>
                            <button className='border-0 bg-white text-danger' onClick={() => setmodal(false)}>Cancel</button>
                            <button className='border-0 bg-white text-primary' onClick={() => deleting(deletingdata)}>Accept</button>
                        </div>
                    </div>
                </section> : null
            }

            <section className='main w-100'>
                <Header />

                <div className=' d-flex justify-content-between'>
                    <Sidebar />
                    <div className='main_panel w-100'>
                        <div className=' py-3 col-12 flex-wrap text-white'>
                            <h1 className='ms-5 fw-bold'>My Auction</h1>

                            <section className=' mx-5 my-4 d-flex justify-content-between flex-wrap '>
                                {
                                    (viewmyauctions.length !== 0) ?
                                        viewmyauctions.map((items, i) => {
                                            return (
                                                <>
                                                    <section className='rounded-2 bg-white col-3 text-black mt-5 mx-5'>
                                                        <section className='col-12 p-2 bg-white text-black d-flex rounded-2' onClick={() => auctiondetails(items)}>
                                                            <div className='col-4  d-flex align-items-center justify-content-center'>
                                                                <img src={imgurl + items.Auction_Logo} alt="" className='w-100' />
                                                            </div>
                                                            <div className='col-8 px-1 py-2'>
                                                                <p className='fw-bold m-0'>{items.Auction_Name}</p>
                                                                <div className='d-flex align-items-center my_auction_date'>
                                                                    <FaCalendar /> &nbsp;
                                                                    <p className='m-0'> {items.Auction_Date}</p> &nbsp;
                                                                    <p className='m-0'>{items.Time}</p>
                                                                </div>
                                                                <p className='fw-bold m-0 my_auction_date my-1'>Points:<span className=' fw-normal'>{items.Points_Per_Team}</span></p>
                                                                <p className='fw-bold m-0 my_auction_date my-1'>Bid Increase:<span className=' fw-normal'>{items.Bid_Increased_By}</span></p>
                                                                <p className='fw-bold m-0 my_auction_date my-1'>Base Bid:<span className=' fw-normal'>{items.Base_Bid}</span></p>
                                                                <p className='fw-bold m-0 my_auction_date my-1'>Player Per Team:<span className=' fw-normal'>{items.Player_Per_Team}</span></p>
                                                            </div>
                                                        </section>

                                                        <section className='border-top border-black d-flex justify-content-between px-3'>
                                                            <div className='py-1'>
                                                                <RiTeamFill className='text-black fs-5 me-3' />
                                                                <IoMdPersonAdd className='text-black fs-5' />
                                                            </div>

                                                            <div className='py-1'>
                                                                <MdOutlineEdit className='text-primary fs-5 me-3' onClick={() => editnaviget(items)} />
                                                                <RiDeleteBinLine className='text-danger fs-5' onClick={(() => setmodal(true) || setdeletingdata(items))} />
                                                            </div>
                                                        </section>
                                                    </section>

                                                </>
                                            )
                                        })
                                        :


                                        <>
                                            <section className='rounded-2 col-12 mt-5'>
                                                <div className='text-white text-center'> No Data Found</div>
                                            </section>
                                        </>

                                }
                                <section className='rounded-2 col-3 mx-5'>

                                </section>

                                <section className='rounded-2 col-3 mx-5'>

                                </section>
                            </section>

                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
