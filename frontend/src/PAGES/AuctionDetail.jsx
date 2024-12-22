import React, { useState } from 'react'
import { Header } from '../common/Header'
import { Sidebar } from '../common/Sidebar'
import { useLocation, useNavigate } from 'react-router-dom'
import { RiDeleteBinLine, RiTeamFill } from 'react-icons/ri'
import { IoMdPersonAdd } from 'react-icons/io'
import { MdOutlineEdit } from 'react-icons/md'
import axios from 'axios'

export function AuctionDetail() {

  let location = useLocation()
  let data = location.state

  let [modal, setmodal] = useState(false)
  let [deletingdata, setdeletingdata] = useState('')

  let deleting = (value) => {

    axios.delete('http://localhost:5000/delete-auction', { data: value })
      .then((res) => {
        console.log(res)
        setmodal(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }


  let naviget = useNavigate()

  let editnaviget = (value) => {
    naviget('/edit-auction', { state: value })
  }


  let viewteamnaviget = (value) => {
    naviget('/view-team', { state: value })
  }

  let addplayernaviget = (value) => {
    naviget('/view-player', { state: value })
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
            <div className=' py-3 col-12  text-white'>
              <h1 className='ms-5 fw-bold'>Auction Detail</h1>

              <div className='mx-5 my-4 p-2 rounded-3 bg-white text-black d-flex justify-content-between align-items-center'>
                <div className='col-1'>
                  <img src={data[1] + data[0].Auction_Logo} alt="" className='w-100' />
                </div>

                <div className=''>
                  <h2>{data[0].Auction_Name}</h2>
                </div>

                <div className='d-flex'>
                  <div className='py-1 me-3'>
                    <RiTeamFill className='text-black fs-5 me-5' onClick={() => viewteamnaviget(data)} />
                    <IoMdPersonAdd className='text-black fs-5 me-5' onClick={() => addplayernaviget(data)} />
                  </div>

                  <div className='py-1'>
                    <MdOutlineEdit className='text-primary fs-5 me-5' onClick={() => editnaviget(data[0])} />
                    <RiDeleteBinLine className='text-danger fs-5 me-5' onClick={(() => setmodal(true) || setdeletingdata(data[0]))} />
                  </div>
                </div>
              </div>

              <div className='mx-5 my-4 p-3 rounded-3 bg-white text-black d-flex justify-content-between align-items-center'>
                <div className='fs-4'>
                  Points : {data[0].Points_Per_Team}
                </div>

                <div className='fs-4'>
                  Base Bid : {data[0].Base_Bid}
                </div>

                <div className='fs-4'>
                  Bid Increased By : {data[0].Bid_Increased_By}
                </div>

                <div className='fs-4'>
                  Players : {data[0].Player_Per_Team}PL/Team
                </div>
              </div>


              {/* <div className='mx-5 my-4 p-3 rounded-3 bg-white text-black d-flex justify-content-evenly align-items-center'>
                <div className='col-5 border border-1 border-black'>
                  <h3 className='fs-5 text-center'>Booster Setting</h3>
                </div>

                <div className='col-5 border border-1 border-black'>

                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
