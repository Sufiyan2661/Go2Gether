import React from 'react'
import { Outlet,Navigate } from 'react-router'
import { useAuth } from '../utils/AuthContext'

const AuthLayout = () => {
  const {isAuthenticated} = useAuth()
  return (
   <>
   {isAuthenticated ? (
    <Navigate to="/"/>
   ):(
    <>
    <section>
      <Outlet/>
    </section>
    </>

   )}
   </>
  )
}

export default AuthLayout