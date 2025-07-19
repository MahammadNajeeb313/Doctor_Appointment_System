import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const location = useLocation()
  
  console.log('Current location:', location.pathname)

  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App