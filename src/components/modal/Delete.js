import axios from "axios";
import { useState } from "react";
import Cookies from 'js-cookie';

const Delete = ({ setModalD, id }) => {
    // Yes Delete
    const handleOKClick = () => {
        axios.delete(`https://test-binar.herokuapp.com/v1/products/${id}`,
            {
                headers: { "Authorization": Cookies.get("token") }
            },
        )
            .then((res) => {
                alert('Upload Succes')
                window.location.reload()
            }).catch(err => {
                console.log(err)
            })
    }
    // console.log(id)

    // No Delete
    const handleCancelClick = () => {
        setModalD(false)
    }

    return (

        <div className="fixed inset-0 z-50">
            <div className="flex h-screen justify-center items-center ">
                <div className="flex-col justify-center bg-white py-10 px-24 border-4 border-sky-500 rounded-xl ">

                    <div className="flex text-lg text-zinc-600 mb-10 text-center" >Are you sure want to delete ?</div>
                    <div className="flex justify-center">
                        <button onClick={handleCancelClick} className="rounded px-4 py-2 text-white bg-green-400 ">No</button>
                        <button onClick={handleOKClick} className=" rounded px-4 py-2 ml-4 text-white  bg-blue-500 ">Yes</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Delete