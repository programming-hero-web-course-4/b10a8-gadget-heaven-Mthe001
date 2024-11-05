import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'

function Head() {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Home></Home>
            <Outlet></Outlet>


        </div>
    )
}

export default Head;