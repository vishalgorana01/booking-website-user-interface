import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'

// react-icons
import {BsStarFill} from 'react-icons/bs'

function RatingBar({clr, progress, rate}) {
    return (
        <span className='flex text-sm font-semibold items-center justify-center w-full'>
            {rate} <BsStarFill className='text-lg text-yellow-500 ml-1 mr-2.5' />
            <ProgressBar className='mt-1 w-full'
                completed={(progress*114)/(progress+90)}
                height='5px'
                bgColor={`${clr}`}
                customLabelStyles={{ color: `${clr}` }}
            />
            <span className='text-md ml-2.5'>{(progress)}</span>
        </span>
    )
}

export default RatingBar