import React, { useState } from 'react';
import Cookies from 'js-cookie';
import Create from './modal/Create';
import { Link } from 'react-router-dom';

export default function Navbar({ children }) {

    const [modal, setModal] = useState(false);

    const Links = [
        // { name: 'Nuriman@gmail.com', link: '/' },
        {
            name: 'Logout',
            clik: () => handleLogout(),
        }
    ];

    const handleLogout = () => {
        Cookies.remove('token')
        Cookies.remove('user')
        // console.log('tes')
        window.location.href = "/"
    }

    return (
        <>
            <div className='shadow-md w-full z-10 fixed top-0 left-0'>
                <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                        <span className='text-3x1 text-black mr-1 pt-2'>
                            <Link to='/dashboard'>
                                Product List
                            </Link>
                        </span>
                        &nbsp;
                        <button onClick={() => setModal(true)} className='w-32 py-2 px-4 bg-white border-2 hover:bg-gray-100 rounded-md text-black text-sm'>Create New</button>
                    </div>
                    <ul className='md:flex md:items-center'>
                        {Links.map((link) => (
                            <li onClick={link.clik} key={link.name} className='md:ml-8 text-xl'>
                                <p className='text-gray-800 hover:text-blue-600 duration-500 cursor-pointer'>{link.name}</p>
                            </li>
                        ))}
                    </ul>
                    {modal && < Create setModal={setModal} />}
                </div>
            </div>
            {children}
        </>
    )
}
