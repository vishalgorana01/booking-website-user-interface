import React from 'react'
import UnderLine from '../Utilities/UnderLine'
import Date from '../Utilities/Date'
import CustomDropdown from '../Utilities/CustomDropdowm'
import Button from '../Utilities/Button'

function CheckAvailability({titleName}) {
    const GuestsOptions = [
        { label: '1 Guest', value: '1 Guest' },
        { label: '2 Guests', value: '2 Guests' },
        { label: '3 Guests', value: '3 Guests' },
        { label: '2 Guests + 1 adult', value: '3 Guests + 1 adult' },
        { label: '3 Guests + 2 adult', value: '3 Guests + 2 adult' },
    ]
    return (
        <span className='flex flex-col gap-y-3.5 items-start justify-center w-full shadow-2xl py-5 px-3.5 lg:w-96' style={{ borderRight: '2px solid #0000002e' }}>
            <span className='flex flex-col items-start justify-center w-full'>
                <h2 className='text-lg font-normal lg:text-xl'>{titleName}</h2>
                <UnderLine />
            </span>

            <span className='flex flex-col items-center justify-center w-full gap-y-4'>
                <span className='flex items-center justify-center w-full'>
                    <Date labelName='Check-in' />
                </span>

                <span className='flex items-center justify-center w-full'>
                    <Date labelName='Check-out' />
                </span>

                <span className='flex items-center justify-center w-full'>
                    <CustomDropdown options={GuestsOptions} labelName='Guests' />
                </span>

                <span className='flex items-center justify-start w-full mt-1.5'>
                    <Button labelName='Check Availability' />
                </span>
            </span>
        </span>
    )
}

export default CheckAvailability