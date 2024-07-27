import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

const SearchPage = () => {
    const { id } =useParams()

    return (
        <>
            <div className='bg-[#c4cde4] h-[auto] pt-[1vmax] p-[3vmax] flex'>
            {
                id?<h1>{id}</h1>:<Loader />
            }
            </div> 
        </>
    )
}

export default SearchPage