import React from 'react'
import { Navigate } from 'react-router-dom'
import TelaLogin from '../pages/TelaLogin'

export default function PrivateRoutes({children}) {
  

  const token = localStorage.getItem('token')
  
  
  return (

    token ? children : <Navigate to='/login' />
    
  )
}

