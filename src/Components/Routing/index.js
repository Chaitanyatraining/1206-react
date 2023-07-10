import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ClassComp from '../../ClassComp'
import ContactUs from '../ContactUs'
import Home from '../Home'
import CompDidMount from '../CompDidMount'
import Pagination from '../Pagination'
import FuncCounterComp from '../FuncCounterComp'
import FuncUserData from '../FuncUserData'
import UseRefHook from '../UseRefHook'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/classComp' element={<ClassComp />} />
            <Route path='/contactUs' element={<ContactUs /> } />
            <Route path='/compdidmount' element={<CompDidMount />} />
            <Route path='/pagination' element={<Pagination />} />
            <Route path='/counterApp' element={<FuncCounterComp />} />
            <Route path='/userdatafunc' element={<FuncUserData />} />
            <Route path='/userefhook' element={<UseRefHook />} />
        </Routes>
    </div>
  )
}

export default Routing