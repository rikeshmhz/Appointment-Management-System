import React from 'react'
import { Link } from 'react-router-dom'
import { RiPieChartFill } from 'react-icons/ri'
import { MdMiscellaneousServices } from 'react-icons/md'
import { BiTask, BiLogOut } from 'react-icons/bi'
import { SlCalender } from 'react-icons/sl'
import { CgProfile } from 'react-icons/cg'

const Sidebar = () => {
  return (
    <>
        <div className='fixed top-0 left-0 h-screen w-64 transition-transform -translate-x-full sm:translate-x-0'>
            <div className='h-full px-3 py-4 bg-gray-800'>
                <Link to="/" className='flex items-center mb-5'>
                <span className='self-center text-lg font-semibold text-white'>Appointment Management System</span>
                </Link>
                <ul className='space-y-5 font-medium'>
                    <li>
                        <Link to="/" className='flex items-center p-2 text-white rounded-lg hover:bg-gray-700'>
                            <RiPieChartFill className='w-6 h-6'/>
                            <span className='ml-3'>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='flex items-center p-2 text-white rounded-lg hover:bg-gray-700'>
                            <MdMiscellaneousServices className='w-6 h-6'/>
                            <span className='ml-3'>Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='flex items-center p-2 text-white rounded-lg hover:bg-gray-700'>
                            <BiTask className='w-6 h-6 '/>
                            <span className='ml-3'>Appointments</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='flex items-center p-2 text-white rounded-lg hover:bg-gray-700'>
                            <SlCalender className='w-6 h-6 '/>
                            <span className='ml-3'>Calendar</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='flex items-center p-2 text-white rounded-lg hover:bg-gray-700'>
                            <CgProfile className='w-6 h-6 '/>
                            <span className='ml-3'>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='flex items-center p-2 text-white rounded-lg hover:bg-gray-700'>
                            <BiLogOut className='w-6 h-6 '/>
                            <span className='ml-3'>LogOut</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Sidebar