import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [input, setInput] = useState(
        {
            email: "",
            password: ""
        }
    )

    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        setInput({ ...input, [name]: value })
    }

    const handleLogin = (event) => {
        // Saat klik form tidak refresh
        event.preventDefault()

        let { email, password } = input
        axios.post(`https://test-binar.herokuapp.com/auth/login`, { email, password })
            .then((res) => {
                let data = res.data
                // let { token, user } = data

                Cookies.set('token', data.result.access_token, { expires: 1 })
                // Cookies.set('user', JSON.stringify(user), { expires: 1 })
                window.location.href = "/dashboard"
                // console.log(data)
            })
            .catch((err) => {
                alert("Password Anda Salah, Silahkan Coba Kembali !!")
            })
    }

    return (
        <>
            <section>

                <div className='min-h-screen bg-gray-50 flex flex-col justify-center'>
                    <div className='max-w-md w-full mx-auto'>
                        <div className='text-center text-xl font-bold'>Login</div>
                        <div className='text-3xl font-bold text-gray-900 mt-2 text-center'></div>
                    </div>
                    <div className='max-w-md w-full mx-auto bg-white p-8 border bordergray-300'>
                        <form onSubmit={handleLogin} className='space-y-6'>
                            <div>
                                <label className='text-sm font-bold text-gray-600 block'>Email</label>
                                <input
                                    onChange={handleChange}
                                    name='email'
                                    type='email'
                                    required="required"
                                    placeholder="Tes123@gmail.com"
                                    className='w-full p-2 border border-gray-300 rounded mt-1' />
                            </div>
                            <div>
                                <label className='text-sm font-bold text-gray-600 block'>Password</label>
                                <input
                                    onChange={handleChange}
                                    name='password'
                                    type='password'
                                    required="required"
                                    className='w-full p-2 border border-gray-300 rounded mt-1' />
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <input type='checkbox' required className='h-4 w-4 text-blue-300 rounded' />
                                    <label className='ml-2 text-sm text-gray-600'>Remember me</label>
                                </div>
                                <div>
                                    <Link to="/forgot-password" className='font-medium text-sm text-blue-500'>Forgot Password?</Link>
                                </div>
                            </div>
                            <div>
                                <button type={'submit'} className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm'>Submit</button>
                            </div>
                            <p className="text-sm font-light text-black">Don’t have an account yet? <Link to="/register" className="font-medium text-blue-500 hover:underline">Sign up</Link></p>
                        </form>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Login