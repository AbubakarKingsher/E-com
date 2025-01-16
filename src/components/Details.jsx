import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'
import { ContextApi } from '../utils/Context'

function Details() {

    const navigate = useNavigate()

    const [productData, setProductData] = useContext(ContextApi)

    const [crrData, setCrrData] = useState([])

    const { id } = useParams()

    useEffect(() => {
        if (productData && productData.length > 0) {
            setCrrData(productData.filter(p => p.id === Number(id))[0]);
        }
    }, [id, productData]);


    const deleteHanler = (id) => {
        const filterProduct = productData.filter(p => p.id != id);
        setProductData(filterProduct)
        localStorage.setItem("product", filterProduct)
        navigate('/')
    }


    return (crrData ? <div className='h-screen w-full flex px-[10%] py-[5%]'>
        <button onClick={() => navigate(-1)} className='absolute top-3 left-7 text-center border-red-400 font-semibold text-red-400 rounded-md border-[1.5px] py-2 px-5 cursor-pointer'>Back</button>
        <div className='h-full w-1/2 flex items-center justify-center'>
            <img className='h-[80%] w-[80%] object-contain hover:cursor-zoom-in' src={crrData.image} />
        </div>
        <div className='h-full w-1/2 flex justify-center flex-col'>

            <h2 className='text-2xl font-medium w-[300px]'>{crrData.title}</h2>
            <h3 className='font-semibold opacity-60 my-3'>{crrData.category}</h3>
            <h3 className='font-semibold text-red-400 text-xl mb-3'>${crrData.price}</h3>
            <p className='font-semibold'>{crrData.des}</p>

            <div className='mt-5'>
                <Link to={`/edit/${crrData.id}`} className='text-center mr-5 border-blue-400 font-semibold text-blue-400 rounded-md border-[1.5px] py-2 px-5 cursor-pointer'>Edit</Link>
                <button onClick={() => deleteHanler(crrData.id)} className='text-center border-red-400 font-semibold text-red-400 rounded-md border-[1.5px] py-2 px-5 cursor-pointer'>Delete</button>
            </div>

        </div>
    </div>

        : <Loading />)
}

export default Details