import React from 'react'

// import image
import france from '../../Assets/Images/France.jpg'
import Button from '../Utilities/Button'

function ShowCase() {
    return (
        <span className='relative flex flex-col h-[20rem] gap-y-3.5 items-start justify-center w-full lg:w-96'>
            <img className='object-cover h-full w-full' src={france} alt="error loading" />
            <span className='absolute text-white font-mono bottom-0 flex gap-y-2 py-3.5 flex-col items-center justify-center w-full bg-[#000000cc]'>
                <span className='flex flex-col items-center justify-center w-full'>
                    <h3 className='capitalize font-semibold text-lg tracking-normal'>Luxury Hotel Rooms</h3>
                    <span className='text-xs font-normal'>starting @ rs.499</span>
                </span>
                <Button labelName='Book now' />
            </span>
        </span>
    )
}

export default ShowCase