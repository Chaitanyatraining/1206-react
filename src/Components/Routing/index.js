import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ClassComp from '../../ClassComp'
import ContactUs from '../ContactUs'
import Home from '../Home'
import CompDidMount from '../CompDidMount'
import Pagination from '../Pagination'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/classComp' element={<ClassComp />} />
            <Route path='/contactUs' element={<ContactUs /> } />
            <Route path='/compdidmount' element={<CompDidMount />} />
            <Route path='/pagination' element={<Pagination />} />
        </Routes>
    </div>
  )
}

export default Routing