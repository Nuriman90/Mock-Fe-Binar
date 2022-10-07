import React, { useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

const Create = ({ setModal }) => {

    const [input, setInput] = useState(
        {
            name: "",
            price: "",
            imageurl: ""
        }
    )

    // Create
    const handleOKClick = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        // console.log(event.target)
        if (name === "name") {
            setInput({ ...input, name: value })
        } else if (name === "price") {
            setInput({ ...input, price: value })
        } else if (name === "imageurl") {
            setInput({ ...input, imageurl: value })
        }
        // console.log(input)
    }

    // Submit
    const handleSubmit = (event) => {
        event.preventDefault()
        let {
            name,
            price,
            imageurl
        } = input

        axios.post(`https://test-binar.herokuapp.com/v1/products/`,
            {
                name,
                price,
                imageurl
            },
            { headers: { "Authorization": Cookies.get("token") } },
        ).then((res) => {
            alert('Upload Succes')
            window.location.reload()
        }).catch(err => {
            console.log(err)
        })
    }

    // Back
    const handleBackClick = () => {
        setModal(false)
    }

    return (

        <div className="fixed inset-0 ">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col w-80 bg-white py-12 px-4 border-4 border-sky-500 rounded-xl ">
                    <div className="text-lg text-black text-center" >Create New</div>
                    <form onSubmit={handleSubmit}>
                        <div className='grid'>
                            <div className='mb-2'>
                                <label className='text-sm font-bold text-gray-600 block'>Name</label>
                                <input
                                    onChange={handleOKClick}
                                    name='name'
                                    value={input.name}
                                    type='string'
                                    required="required"
                                    className='w-full p-2 border border-gray-300 rounded mt-1' />
                            </div>
                            <div className='mb-2'>
                                <label className='text-sm font-bold text-gray-600 block'>Price</label>
                                <input
                                    onChange={handleOKClick}
                                    name='price'
                                    value={input.price}
                                    type='string'
                                    required="required"
                                    className='w-full p-2 border border-gray-300 rounded mt-1' />
                            </div>
                            <div className='mb-2'>
                                <label className='text-sm font-bold text-gray-600 block'>Image</label>
                                <input
                                    onChange={handleOKClick}
                                    name='imageurl'
                                    value={input.imageurl}
                                    type='string'
                                    required="required"
                                    className='w-full p-2 border border-gray-300 rounded mt-1' />
                            </div>
                        </div>
                    </form>

                    <div className="flex mt-7 justify-end">
                        <button onClick={handleBackClick} className=" rounded px-4 py-2 text-white  bg-green-400 ">Back</button>
                        <button onClick={handleOKClick} className="rounded px-4 py-2 ml-4 text-white bg-blue-500 ">Create</button>
                    </div>

                </div>
            </div>

        </div>

    );
}

export default Create