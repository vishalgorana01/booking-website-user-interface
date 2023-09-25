import React from 'react'

// react-icons
import { MdOutlineArrowDropDown } from 'react-icons/md'
import UnderLine from './UnderLine'

function CheckboxFilter({ filterName, options }) {
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <span className='flex gap-x-1.5 items-center justify-between w-full'>
                <h2 className='text-md font-normal'>{filterName}</h2>
                <MdOutlineArrowDropDown className='text-black text-lg' />
            </span>
            <UnderLine />

            <span className='flex flex-col items-start gap-y-1.5 justify-center w-full'>
                {options.map((ele, index) => {
                    return (
                    <span key={index} className='flex items-center justify-center gap-x-1.5 text-[#0000009f]'>
                        <input type='checkbox' />
                        <label className='text-sm font-normal md:text-md' htmlFor="">{ele.label}</label>
                    </span>)
                })}
            </span>
        </div>
    )
}

export default CheckboxFilter