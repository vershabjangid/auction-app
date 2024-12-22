import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export function PrivateRoute() {

    let tokenval = JSON.parse(localStorage.getItem('token'))
    
    
    if (tokenval == null) {
        return <Navigate to={"/"} />
    }
    else {
        return <Outlet />
    }
}
