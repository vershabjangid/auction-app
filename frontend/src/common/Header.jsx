import React from 'react'
import logo from "../images/download (1).webp"

export function Header() {
    return (
        <>
            <header className='bg-black w-100 py-2 d-flex justify-content-between text-white'>
                <div className='w-25 d-flex align-items-center'>
                    <img src={logo} alt="" className='w-25' />
                    <h4>Bansi Sports Finder</h4>
                </div>

                <div className='w-50 d-flex align-items-center justify-content-center'>
                    <ul className='navbar d-flex list-unstyled align-items-center justify-content-between w-100'>
                        <li className=''>Today Auctions</li>
                        <li className=''>Pricing</li>
                        <li className=''>Contact Us</li>
                        <li className='pe-2'>
                            <button className='border border-1 border-white text-black rounded-5 py-2'>
                                Profile
                            </button>
                        </li>
                    </ul>
                </div>
            </header>


        
        </>
    )
}
