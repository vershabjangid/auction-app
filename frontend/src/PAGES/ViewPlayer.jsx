import React from 'react'
import { Header } from '../common/Header'
import { Sidebar } from '../common/Sidebar'
import { useLocation, useNavigate } from 'react-router-dom'

export function ViewPlayer () {
  let location = useLocation()
  let data = location.state

  console.log(data)

  let naviget = useNavigate()
  let addplayer = value => {
    naviget('/add-player', { state: value })
  }
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
                  <h1 className=' fw-bold'>View Players</h1>
                </div>
                <div>
                  <button
                    className='border-0 bg-white px-4 py-2 rounded-2 fw-bold'
                    onClick={() => addplayer(data)}
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
