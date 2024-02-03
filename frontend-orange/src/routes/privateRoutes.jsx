import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoutes({children}) {


  const user = false
  
  return (

    user ? children : <Navigate to='/login' />
  )
}

