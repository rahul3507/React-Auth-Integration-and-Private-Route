import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function Root() {
  return (
    <div>
        <NavBar/>
        <Outlet></Outlet>
    </div>
  )
}

export default Root