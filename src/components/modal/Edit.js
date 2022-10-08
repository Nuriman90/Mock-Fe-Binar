import axios from "axios";
import { useState } from "react";
import Cookies from 'js-cookie';

const Edit = ({ setModalE, data }) => {

    const [input, setInput] = useState(
        {
            name: "",
            price: "",
            imageurl: ""
        }
    )

    // Input
    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        // console.log(input)
    }

    // Oke
    const handleOKClick = (event) => {
        event.preventDefault()
        let {
            name,
            price,
            imageurl
        } = input
        axios.put(`https://test-binar.herokuapp.com/v1/products/${data.id}`,
            {
                name,
                price,
                imageurl
            },
            { headers: { "Authorization": Cookies.get("token") } }
        ).then((res) => {
            alert('Update Succes')
        }).catch(err => {
            console.log(err)
        })
        // console.log(input)
    }

    // Cancel
    const handleCancelClick = () => {
        setModalE(false)
    }

    // console.log(data)
    return (

        <div className="fixed inset-0 z-50">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col w-80 bg-white py-12 px-4 border-4 border-sky-500 rounded-xl ">
                    <div className="text-lg text-black text-center" >Edit Product</div>
                    <form onSubmit={handleOKClick}>
                        <div className='grid'>
                            <div className='mb-2'>
                                <label className='text-sm font-bold text-gray-600 block'>Name</label>
                                <input
                                    onChange={(e) => handleInput(e)}
                                    name='name'
                                    value={input.name || data.name}
                                    type='string'
                                    required="required"
                                    className='w-full p-2 border border-gray-300 rounded mt-1' />
                            </div>
                            <div className='mb-2'>
                                <label className='text-sm font-bold text-gray-600 block'>Price</label>
                                <input
                                    onChange={(e) => handleInput(e)}
                                    name='price'
                                    value={input.price || data.price}
                                    type='string'
                                    required="required"
                                    className='w-full p-2 border border-gray-300 rounded mt-1' />
                            </div>
                            <div className='mb-2'>
                                <label className='text-sm font-bold text-gray-600 block'>Image</label>
                                <input
                                    onChange={(e) => handleInput(e)}
                                    name='imageurl'
                                    value={input.imageurl || data.imageurl}
                                    type='string'
                                    required="required"
                                    className='w-full p-2 border border-gray-300 rounded mt-1' />
                            </div>
                        </div>
                    </form>

                    <div className="flex mt-7 justify-end">
                        <button onClick={handleCancelClick} className=" rounded px-4 py-2 text-white  bg-green-400 ">Back</button>
                        <button onClick={handleOKClick} className="rounded px-4 py-2 ml-4 text-white bg-blue-500 ">Update</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Edit