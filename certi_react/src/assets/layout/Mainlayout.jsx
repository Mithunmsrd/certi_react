import React from 'react'
import NavBar from '../component/NavBar'
import { Outlet } from 'react-router'

const Mainlayout = () => {
  return (
<>
<NavBar/>
<Outlet/></>
  )
}

export default Mainlayout
