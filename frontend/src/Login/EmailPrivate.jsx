import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
export function EmailPrivate() {

    let tokenval = JSON.parse(localStorage.getItem('Emailtoken'))


    if (tokenval == null) {
        return <Navigate to={"/forgot-password"} />
    }
    else {
        return <Outlet />
    }

}
