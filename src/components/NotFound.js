import React from 'react';
import { Link } from 'react-router-dom';
import Not from '../assets/not.jpg';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-2 bg-slate-100 h-screen'>
            <img src={Not} alt="Not Found" className='w-1/2 pointer-events-none' />
            <button className='w-1/6 py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm'>
                <Link to='/'>
                    Go Back
                </Link>
            </button>
        </div>
    )
}

export default NotFound