import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './adminComponents/Sidebar'
import Dashboard from './adminComponents/Dashboard'
import Home from './adminPages/Home'

const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/side' element={<Sidebar/>}/>
                <Route path='/dash' element={<Dashboard/>}/>
                <Route path='/home' element={<Home/>}/>  
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes