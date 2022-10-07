const Edit = ({ setModalE }) => {

    const handleOKClick = () => {
        setModalE(false)
    }
    const handleCancelClick = () => {
        setModalE(false)
    }

    return (

        <div className="fixed inset-0 z-50">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col w-80 bg-white py-12 px-4 border-4 border-sky-500 rounded-xl ">
                    <div className="text-lg text-black text-center" >Edit Product</div>
                    <form>
                        <div className='grid'>
                            <div className='mb-2'>
                                <label className='text-sm font-bold text-gray-600 block'>Name</label>
                                <input
                                    // onChange={handleInput}
                                    name='title'
                                    // value={input.title}
                                    type='string'
                                    required="required"
                                    className='w-full p-2 border border-gray-300 rounded mt-1' />
                            </div>
                            <div className='mb-2'>
                                <label className='text-sm font-bold text-gray-600 block'>Price</label>
                                <input
                                    // onChange={handleInput}
                                    name='company_name'
                                    // value={input.company_name}
                                    type='string'
                                    required="required"
                                    className='w-full p-2 border border-gray-300 rounded mt-1' />
                            </div>
                            <div className='mb-2'>
                                <label className='text-sm font-bold text-gray-600 block'>Image</label>
                                <input
                                    // onChange={handleInput}
                                    name='company_city'
                                    // value={input.company_city}
                                    type='string'
                                    required="required"
                                    className='w-full p-2 border border-gray-300 rounded mt-1' />
                            </div>
                        </div>
                    </form>

                    <div className="flex mt-7 justify-end">
                        <button onClick={handleOKClick} className=" rounded px-4 py-2 text-white  bg-green-400 ">Back</button>
                        <button onClick={handleCancelClick} className="rounded px-4 py-2 ml-4 text-white bg-blue-500 ">Update</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Edit