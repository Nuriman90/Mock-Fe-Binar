import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import moment from 'moment';

const DashboardDetail = () => {
    let { slug } = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        if (slug !== undefined) {
            axios.get(`https://test-binar.herokuapp.com/v1/products/${slug}`,
                { headers: { "Authorization": Cookies.get("token") } },
            )
                .then((res) => {
                    setData(res.data.result)
                })
        }

    }, [])
    // console.log(data)

    // Format Uang
    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(number);
    };

    // Format Tanggal
    const formatDate = () => moment().format('LL');

    return (
        <div>
            <div className="m-10 lg:mt-24 lg:mb-6 lg:mx-28">
                <h3 className="text-4xl leading-6 font-medium text-gray-900">Job Information</h3>
            </div>
            <div className='bg-white shadow-xl border-2 mx-10 lg:mx-24 lg:p-8 overflow-hidden sm:rounded-lg'>

                <div className='px-4 py-5 flex flex-row justify-between sm:px-6'>
                    <div className="flex justify-between gap-x-5 pb-4">
                        <div className="flex gap-x-5 md:gap-x-10">
                            <img src={data?.imageurl} alt="logo" className="h-14 w-14 rounded-full md:h-32 md:w-32" />
                        </div>
                    </div>
                </div>

                <div className='border-t border-gray-200'>
                    <div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt className="text-sm font-medium text-gray-500">Name</dt><dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data?.name}</dd></div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt className="text-sm font-medium text-gray-500">Price</dt><dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{rupiah(data?.price)}</dd></div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt className="text-sm font-medium text-gray-500">Update at</dt><dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{formatDate(data?.created_at)}
                        </dd></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DashboardDetail