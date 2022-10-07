import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    let navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;

        setInput({ ...input, [name]: value });
    };

    const handleRegister = (event) => {
        event.preventDefault();

        let { name, email, password } = input;
        // console.log(input);

        axios
            .post("https://test-binar.herokuapp.com/auth/signup", {
                name,
                email,
                password,
            })
            .then((res) => {
                // console.log(res);
                navigate("/");
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <section>

            <div className='min-h-screen bg-gray-50 flex flex-col justify-center'>
                <div className='max-w-md w-full mx-auto'>
                    <div className='text-center text-xl'>Register</div>
                    <div className='text-3xl text-gray-900 mt-2 text-center'></div>
                </div>
                <div className='max-w-md w-full mx-auto bg-white p-8 border bordergray-300'>
                    <form onSubmit={handleRegister} className='space-y-6'>
                        <div>
                            <label className='text-sm text-gray-600 block'>Name</label>
                            <input
                                onChange={handleChange}
                                name='name'
                                type="text"
                                placeholder="Name"
                                required="required"
                                className='w-full p-2 border border-gray-300 rounded mt-1' />
                        </div>
                        <div>
                            <label className='text-sm text-gray-600 block'>Email</label>
                            <input
                                onChange={handleChange}
                                name='email'
                                type='email'
                                placeholder="Email"
                                required="required"
                                className='w-full p-2 border border-gray-300 rounded mt-1' />
                        </div>
                        <div>
                            <label className='text-sm text-gray-600 block'>Password</label>
                            <input
                                onChange={handleChange}
                                name='password'
                                type='password'
                                placeholder="••••••••"
                                required="required"
                                className='w-full p-2 border border-gray-300 rounded mt-1' />
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <input required type='checkbox' className='h-4 w-4 text-blue-500 rounded mr-2' />
                                <label className="text-black"> I accept the <Link to="#" className="text-blue-500 hover:underline">Terms and Conditions</Link></label>
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm'>Create Account</button>
                        </div>
                        <p className="text-sm text-black">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link></p>
                    </form>
                </div>
            </div>

        </section>

    )
}

export default Register