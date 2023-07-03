import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ClassComp from '../../ClassComp'
import ContactUs from '../ContactUs'
import Home from '../Home'
import CompDidMount from '../CompDidMount'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/classComp' element={<ClassComp />} />
            <Route path='/contactUs' element={<ContactUs /> } />
            <Route path='/compdidmount' element={<CompDidMount />} />
        </Routes>
    </div>
  )
}

export default Routing