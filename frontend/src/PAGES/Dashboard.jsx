import React from 'react'
import { Header } from '../common/Header'
import { Sidebar } from '../common/Sidebar'
import { RiAuctionFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export function Dashboard() {
  return (
    <>
      <section className='main w-100'>
        <Header />

        <div className=' d-flex justify-content-between'>
          <Sidebar />
          <div className='main_panel w-100'>
            <div className=' py-3 col-12 d-flex justify-content-evenly flex-wrap'>


             <Link className='option_cards mx-2 col-3 bg-white p-3 d-flex text-black text-decoration-none' to={"/new-auction"}>
                <div className='col-3 py-4 d-flex justify-content-center fs-1'>
                  <RiAuctionFill />
                </div>
                <div className='col-9  d-flex align-items-center justify-content-center flex-column'>
                  <h3>New Auction</h3>
                  <p>Create a new auction</p>
                </div>
             </Link>
              <div className='option_cards mx-2 col-3 bg-white p-3 d-flex'>
                <div className='col-3 py-4 d-flex justify-content-center fs-1'>
                  <RiAuctionFill />
                </div>
                <div className='col-9  d-flex align-items-center justify-content-center flex-column'>
                  <h3>Join Auction</h3>
                  <p>Create a new auction</p>
                </div>
              </div>

              <div className='option_cards mx-2 col-3 bg-white p-3 d-flex'>
                <div className='col-3 py-4 d-flex justify-content-center fs-1'>
                  <RiAuctionFill />
                </div>
                <div className='col-9  d-flex align-items-center justify-content-center flex-column'>
                  <h3>My Auction</h3>
                  <p>Create a new auction</p>
                </div>
              </div>


              <div className='option_cards mt-5 mx-2 col-3 bg-white p-3 d-flex'>
                <div className='col-3 py-4 d-flex justify-content-center fs-1'>
                  <RiAuctionFill />
                </div>
                <div className='col-9  d-flex align-items-center justify-content-center flex-column'>
                  <h3>My Auction</h3>
                  <p>Create a new auction</p>
                </div>
              </div>

              <div className='mt-5 mx-2 col-3 '>  
              </div>

              <div className='mt-5 mx-2 col-3 '>  
              </div>
              

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
