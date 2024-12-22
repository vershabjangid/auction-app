import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Header } from '../common/Header'
import { Sidebar } from '../common/Sidebar'
import axios from 'axios'
import { RiDeleteBinLine } from 'react-icons/ri'
import { MdOutlineEdit } from 'react-icons/md'
// import { RiDeleteBinLine, RiTeamFill } from 'react-icons/ri'
// import { IoMdPersonAdd } from 'react-icons/io'
// import { MdOutlineEdit } from 'react-icons/md'

export function ViewTeam() {
    let location = useLocation()
    let data = location.state

    let naviget = useNavigate();

    let addteam = (value) => {
        naviget('/add-team', { state: value })
    }

    let [myteams, setmyteams] = useState([])
    let [imgurl, setimgurl] = useState('')


    let auctionteams = (value) => {
        axios.get('http://localhost:5000/view-team')
            .then((res) => {
                setmyteams(res.data.viewdata.filter((value) => (value.Tournament_id === data[0]._id)))
                setimgurl(res.data.imgurl)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        auctionteams()
    }, [])


    let [modal, setmodal] = useState(false)
    let [deletingdata, setdeletingdata] = useState('')

    let deleting = (value) => {

        axios.delete('http://localhost:5000/delete-team', { data: value })
            .then((res) => {
                console.log(res)
                setmodal(false)
                auctionteams();
            })
            .catch((error) => {
                console.log(error)
            })
    }


    let updateteam = (value) => {
        naviget('/update-team', { state: value })
    }

    let ViewTeamDetails = (value) => {
        naviget("/view-team-details", { state: [value, imgurl] })
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
                            <div className='d-flex justify-content-between align-items-center mx-5'>
                                <div>
                                    <p className=' fs-4 fw-bold m-0'>{data[0].Auction_Name}</p>
                                    <h1 className=' fw-bold'>View Team</h1>
                                </div>

                                <div>
                                    <button className='border-0 bg-white px-4 py-2 rounded-2 fw-bold' onClick={() => addteam(data)} >Add +</button>
                                </div>
                            </div>

                            <section className=' mx-5 my-4 d-flex justify-content-between flex-wrap '>
                                {
                                    (myteams.length !== 0) ?
                                        myteams.map((items, i) => {
                                            return (
                                                <>
                                                    <section className='rounded-2 bg-white col-3 text-black mt-5 mx-5'>
                                                        <section className='col-12 p-2 bg-white text-black d-flex rounded-2' onClick={() => ViewTeamDetails(items)}>
                                                            <div className='col-4  d-flex align-items-center justify-content-center'>
                                                                <img src={imgurl + items.Team_Logo} alt="" className='w-100' />
                                                            </div>
                                                            <div className='col-8 px-1 py-2'>
                                                                <p className='fw-bold m-0'>{items.Team_Name}</p>
                                                                <p className='fw-bold m-0 my_auction_date my-1'><span className=' fw-normal'>{items.Team_Short_Name}</span></p>
                                                                <p className='fw-bold m-0 my_auction_date my-1'><span className=' fw-normal'>Points : {items.Team_Points}</span></p>
                                                            </div>
                                                        </section>

                                                        <section className='border-top border-black d-flex justify-content-between px-3'>
                                                            <div className='py-1 '>
                                                                <p>S-Name : {items.Team_Short_Name}</p>
                                                                <p>S-Key : {items.Team_Short_Key}</p>
                                                            </div>

                                                            <div className='py-1'>
                                                                <MdOutlineEdit className='text-primary fs-5 me-3' onClick={() => updateteam(items)} />
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
