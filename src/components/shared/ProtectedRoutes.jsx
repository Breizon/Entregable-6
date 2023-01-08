import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

  if (localStorage.getItem('token')) {
    // User logged  
    return <Outlet />
  } else {
    // No logged!!
    return <Navigate  to='/login'/>
  }

}

export default ProtectedRoutes