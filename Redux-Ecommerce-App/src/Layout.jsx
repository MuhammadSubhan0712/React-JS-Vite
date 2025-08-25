import Navbar from './component/Navbar'
import Footer from './component/Footer'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>

    <div>
    <Navbar/>
    </div>
    <div>
    <Outlet/>
    </div>
    {/* <Footer/> */}
    <Footer/>
    </div>
  )
}

export default Layout