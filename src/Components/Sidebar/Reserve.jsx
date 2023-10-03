import React from 'react'
import Date from '../Utilities/Date'
import CustomDropdown from '../Utilities/CustomDropdowm'
import CheckboxFilter from '../Utilities/CheckboxFilter'
import UnderLine from '../Utilities/UnderLine'
import { BiDollar } from 'react-icons/bi'
import Button from '../Utilities/Button'

function Reserve() {
    const roomsOptions = [
        { label: '1 room', value: '1 room' },
        { label: '2 room', value: '2 room' },
        { label: '3 room', value: '3 room' },
        { label: '4 room', value: '4 room' },
        { label: '5 room', value: '5 room' },
    ]

    const adultsOptions = [
        { label: 'single', value: 'single' },
        { label: 'couple', value: 'couple' },
        { label: '3 adults', value: '3 adults' },
        { label: '4 adults', value: '4 adults' },
    ]

    const childOptions = [
        { label: 'single chlild', value: 'single child' },
        { label: '2 childs', value: '2 childs' },
    ]

    const ExtraServicesOptions = [
        { label: 'Room Clean' },
        { label: 'Massage' },
        { label: 'Day Spa' },
    ]
    return (
        <div className='flex flex-col items-start justify-center w-[30rem] shadow-xl px-3.5 py-5 gap-y-7' style={{ borderLeft: '2px solid #0000002e' }}>
            <h1 className='text-3xl tracking-wider font-semibold text-black'>Reserve:</h1>

            <span className='flex flex-col gap-y-1 items-start justify-start w-full mb-2'>
                <Date labelName='check-in' />
                <Date labelName='check-out' />
                <CustomDropdown labelName='rooms' options={roomsOptions} />
                <span className='flex items-center justify-between gap-x-2 w-full'>
                    <CustomDropdown labelName='adults' options={adultsOptions} />
                    <CustomDropdown labelName='childrens' options={childOptions} />
                </span>
            </span>

            <CheckboxFilter filterName='Extra Services' options={ExtraServicesOptions} />

            <UnderLine />
            <span className='flex items-center justify-between w-full'>
                <span className='text-xl text-black font-semibold'>Total Cost</span>
                <span className='flex items-center justify-center text-xl text-black font-semibold'>
                    <BiDollar className='text-2xl mr-0.5' />299
                </span>
            </span>

            <button className='flex items-center font-semibold text-md text-white bg-green-500 py-1.5 justify-center w-full hover:bg-green-400'>Book Now</button>
        </div>
    )
}

export default Reserve