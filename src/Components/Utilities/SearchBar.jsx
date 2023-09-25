import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'

function SearchBar({ labelName }) {
    const [state, setState] = useState('')
    const handleChange = (value) => {
        setState(value)
    }
    return (
        <span className='flex flex-col items-start justify-center gap-y-1.5 w-full'>
            <label className='text-md text-normal text-[#000000c7]' htmlFor="">{labelName}</label>
            <span className='flex items-center justify-between py-0.5 px-1.5 rounded-sm w-full text-[#0000006b]' style={{ border: '2px solid #0000002e' }}>
                <input type="text" name='price' value={state} onChange={(ele) => handleChange(ele.currentTarget.value)} className='outline-none border-none' placeholder='Search' />
                <IoIosSearch className='text-black text-xl' />
            </span>
        </span>
    )
}

export default SearchBar