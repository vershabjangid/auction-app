import { sidedata } from './Sidebardata'
import { Link } from 'react-router-dom'

export function Sidebar() {

    let sidebardata = sidedata;

    return (
        <>
            <div className='sidebar_main'>
                {
                    sidebardata.map((items, i) => {
                        return (
                            <>
                                <Link to={items.path} className=' text-black text-decoration-none'>
                                    <div className='sideoptions fs-2 d-flex justify-content-center align-items-center'>
                                        <div className='text-center d-flex align-items-center'>
                                            {items.icons}
                                        </div>
                                        <div className='name_opactiy text-center d-flex align-items-center fs-6 ms-2'>
                                            {items.name}
                                        </div>
                                    </div>
                                </Link>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
