import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import Delete from "../../components/modal/Delete";
import Edit from '../../components/modal/Edit';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    // Data
    const [data, setData] = useState(null);

    // Indikator
    const [fetchStatus, setFetchStatus] = useState(true);

    useEffect(() => {
        if (fetchStatus === true) {
            axios.get('https://test-binar.herokuapp.com/v1/products',
                { headers: { "Authorization": Cookies.get("token") } },
            )
                .then((res) => {
                    setData(res.data.result)
                })
                .catch(() => {
                })
            setFetchStatus(false)
        }
    }, [fetchStatus])

    // Format Uang
    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(number);
    };

    const [modalE, setModalE] = useState(false);

    const [modalD, setModalD] = useState(false);
    const [id, setId] = useState(null);

    const clickedE = () => {
        setModalE(true);
    };

    const clickedD = (v) => {
        setModalD(true);
        setId(v);
    };
    // console.log(data)

    return (
        <div className='min-h-screen bg-gray-200 w-screen flex-col justify-center py-12 '>

            <h1 className='text text-2xl font-bold p-8 lg:pl-0 text-center'>Product List</h1>
            <div className='w-full flex flex-wrap justify-center items-center gap-4 lg:justify-center'>
                {
                    data !== null &&
                    data.map((res) => {
                        return (
                            <div key={res.id} className='w-72 h-80 max-w-xs p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl'>
                                <div className='flex'>
                                    <img className='h-52 w-full justify-self-center object-cover rounded-lg' src={res.imageurl} alt='list' />
                                    <div className='absolute p-1 mr-2 top-3 right-3'>
                                        <FontAwesomeIcon icon={faPen} onClick={clickedE} />
                                        &nbsp;
                                        &nbsp;
                                        <FontAwesomeIcon icon={faTrash} onClick={() => clickedD(res.id)} />
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <h2 className='font-bold text-lg'>{res.name}</h2>
                                    <div className='flex p-1'>
                                        <p className='text-sm text-gray-600'>{rupiah(res.price)}</p>
                                    </div>
                                    <button className='text-white bg-blue-600 px-3 rounded-md hover:bg-blue-700 w-full cursor-pointer'>
                                        <Link to={`/dashboard-detail/${res.id}`} key={res.id}>
                                            Learn More
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                {modalE && < Edit setModalE={setModalE} />}
                {modalD && < Delete setModalD={setModalD} id={id} />}
            </div>
        </div>

    )
}

export default Dashboard