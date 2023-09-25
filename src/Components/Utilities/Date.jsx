import React, { useState } from 'react'

function Date(props) {
    const { labelName } = props
    const [Date, setDate] = useState('')

    const handleChange = (value)=>{
        // console.log(value)
        setDate(value)
    }

    return (
        <span className='flex flex-col items-start justify-center gap-y-1.5 w-full'>
            <label className='text-md text-normal text-[#000000c7]' htmlFor="">{labelName}</label>
            <input type="date" name='date' value={Date} onChange={(ele)=>handleChange(ele.currentTarget.value)} className='outline-none py-0.5 px-1.5 rounded-sm text-[#0000006b] w-full' style={{border: '2px solid #0000002e'}} />
        </span>
    )
}

export default Date