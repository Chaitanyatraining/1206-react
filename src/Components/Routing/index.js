import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ClassComp from '../../ClassComp'
import ContactUs from '../ContactUs'
import Home from '../Home'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/classComp' element={<ClassComp />} />
            <Route path='/contactUs' element={<ContactUs /> } />
        </Routes>
    </div>
  )
}

export default Routing