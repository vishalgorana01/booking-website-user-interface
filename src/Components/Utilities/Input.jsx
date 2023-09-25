import React, { useState } from 'react'

function Input({labelName, price, title}) {
    const [state, setState] = useState(price)
    const handleChange = (value)=>{
        setState(value)
    }
    return (
        <span className='flex flex-col items-start justify-center gap-y-1.5 w-full'>
            <label className='text-md text-normal text-[#000000c7]' htmlFor="">{labelName} ({title})</label>
            <input type="number" name='price' value={state} onChange={(ele) => handleChange(ele.currentTarget.value)} className='outline-none py-0.5 px-1.5 rounded-sm w-full text-[#0000006b]' style={{ border: '2px solid #0000002e' }} />
        </span>
    )
}

export default Input