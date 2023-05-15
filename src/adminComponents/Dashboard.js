import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaMoneyBill, FaCheck } from 'react-icons/fa'
import { MdPendingActions } from 'react-icons/md'

const Dashboard = () => {
    return (
        <>
            <div className="p-4 sm:ml-64">
                <div className='my-8'>
                    <span className='text-3xl font-bold'>Dashboard</span>
                </div>
                <div className="grid grid-cols-4 gap-4 mb-4 mt-24">
                    <Link to="/">
                    <div className="flex items-center h-32 rounded bg-pink-100">
                        <p className="text-lg font-medium p-3">Users</p>
                        <FaUser className='w-6 h-5'/>
                    </div>
                    </Link>
                    <Link to="/">
                    <div className="flex items-center h-32 rounded bg-orange-100">
                        <p className="text-lg font-medium p-3">Balance</p>
                        <FaMoneyBill className='w-6 h-10'/>
                    </div>
                    </Link>
                    <Link to="/">
                    <div className="flex items-center h-32 rounded bg-yellow-100">
                        <p className="text-lg font-medium p-3">Pending</p>
                        <MdPendingActions className='w-6 h-10'/>
                    </div>
                    </Link>
                    <Link to="/">
                    <div className="flex items-center h-32 rounded bg-green-100">
                        <p className="text-lg font-medium p-3">Success</p>
                        <FaCheck className='w-6 h-10'/>
                    </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Dashboard