import React from 'react'
import { Header } from '../common/Header'
import { Sidebar } from '../common/Sidebar'
import { useLocation } from 'react-router-dom'

export function ViewTeamDetails() {
    let location = useLocation();
    let data = location.state
    console.log(data)
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
                                    <p className=' fs-4 fw-bold m-0'>{data[0].Team_Name}</p>
                                    <h1 className=' fw-bold'>Team Details</h1>
                                </div>
                            </div>


                            <section className='table_section mx-5 border border-1 border-danger'>
                                <table className='border border-1 border-light col-12'>
                                    <tr className='col-12'>
                                        <th className='border border-e-2 border-white ps-1 col-1 py-2'>S.NO</th>
                                        <th className='border border-e-2 border-white ps-1 col-4 py-2'>Name</th>
                                        <th className='border border-e-2 border-white ps-1 py-2'>Sold IN</th>
                                        <th className='border border-e-2 border-white ps-1 py-2'>Remaining</th>
                                        <th className='ps-1 border border-b-2 border-white ps-1 py-2'>Total</th>
                                    </tr>


                                    <tr className='col-12'>
                                        <td className='border border-e-2 border-white ps-1 py-2'>0</td>
                                        <td className='border border-e-2 border-white ps-1 py-2'>Name</td>
                                        <td className='border border-e-2 border-white ps-1 py-2'>Sold IN</td>
                                        <td className='border border-e-2 border-white ps-1 py-2'>Remaining</td>
                                        <td className='ps-1 border border-b-2 border-white ps-1 py-2'>Total</td>
                                      
                                    </tr>

                                </table>
                            </section>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}


