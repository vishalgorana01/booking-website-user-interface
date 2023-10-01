import React from 'react'

// react-icons
import { MdStars, MdEmail, MdCall, MdOutlineNoFood, MdWifi, MdCommute } from 'react-icons/md'
import { BsHeart, BsShare, BsFillCalendarCheckFill, BsClockFill, BsFillCircleFill } from 'react-icons/bs'
import { GiDiamonds } from 'react-icons/gi'
import { PiTelevisionBold, PiBathtub } from 'react-icons/pi'
import { IoWifiSharp } from 'react-icons/io'
import { BiSwim, BsJoystick } from 'react-icons/bi'
import ShowCaseRating from '../Utilities/ShowCaseRating'
import Reviews from '../Utilities/Reviews'

export default function Description() {
    const HighlightsPoints = [
        'View the Scenic Beauty from the Hotel',
        'Enjoy the sea water changing',
        'Take a view of Coral reef from the Boat',
        'Go for Snorkelling and Kayaking',
        'Enjoy the Deep Sea Fishing',
        'Go for Shopping at Local Market',
    ]

    const Highlights = HighlightsPoints.map((ele, index) => {
        return (
            <span key={index} className='flex items-center justify-start gap-x-1.5 w-full'>
                <GiDiamonds />
                <span>{ele}</span>
            </span>
        )
    })

    const itineraryPoints = [
        {
            title: 'Arriving at Agatti Beach',
            desc: ''
        },
        {
            title: 'Exploring Agatti Beach',
            desc: ''
        },
        {
            title: 'More Activities',
            desc: ''
        },
        {
            title: 'Way Back',
            desc: ''
        }
    ]

    const tourItinerary = itineraryPoints.map((ele, index) => {
        return (
            <span className='flex flex-col items-start gap-y-1 gap-x-1.5 justify-center text-xs w-full sm:flex-row'>
                <span className='bg-green-400 px-3.5 w-20 font-semibold py-1.5 rounded-sm'>Day {index+1}</span>
                <span key={index} className='flex flex-col items-start justify-center text-left'>
                    <span className='flex items-center justify-center gap-x-2 text-green-700'>
                        <GiDiamonds className='text-xs' />
                        <span className='text-xs font-semibold'>{ele.title}</span>
                    </span>
                    <span className='flex items-center justify-center w-full text-left text-xs h-full px-5 py-3.5 my-2 border-l-2 border-green-500 ml-1.5'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quisquam voluptate ex tempore soluta ipsam consequuntur doloribus sit illum. Ullam!
                    </span>
                </span>
            </span>
        )
    })
    return (
        <div className='flex flex-col items-center justify-center w-full gap-y-16'>
            <span className='flex flex-col items-center justify-center w-full gap-y-2'>
                <span className='flex font-sans text-black items-center justify-start gap-x-1.5 w-full'>
                    <h1 className='text-lg text-green-700 font-semibold'>10 days Vacation in Florence Resort</h1>
                    <h3 className='text-xs text-green-700'>Paris, France</h3>
                </span>

                <span className='flex font-sans text-xs text-green-700 items-center justify-start gap-x-1.5 w-full'>
                    from 199/night &nbsp; <MdStars className='text-yellow-500 text-lg' /> 4.5/5
                </span>

                <span className='flex font-sans text-xs text-green-700 items-center justify-between gap-x-1.5 w-full'>
                    <span className='flex flex-col items-start justify-center text-left gap-x-2.5 gap-y-1.5 sm:flex-row sm:items-center'>
                        <span className='flex items-center justify-center'>
                            <MdEmail className='text-lg cursor-pointer text-blue-400 mr-1' />:&nbsp;
                            <a href="mailto:hotelio432@gmail.com">hotelio432@gmil.com</a>
                        </span>
                        <span className='flex items-center justify-center'>
                            <MdCall className='text-lg cursor-pointer text-blue-400 mr-1' />:&nbsp;
                            4032 001 118 2993
                        </span>
                    </span>
                    <span className='flex items-center text-md justify-center'>
                        <BsHeart className='text-lg mr-1.5 cursor-pointer' /> 16 &nbsp; <BsShare className='text-lg ml-2.5 cursor-pointer' />
                    </span>
                </span>
            </span>

            <span className='text-left text-xs font-normal flex flex-col items-start justify-center w-full gap-y-5'>
                <span className='text-sm font-semibold text-green-700'>Details about our tour details</span>
                <span className='text-justify'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem animi, nemo quibusdam quod laudantium quas blanditiis ipsam non provident qui. Corporis officiis maiores soluta, harum excepturi vero atque, dolores pariatur nihil repellendus delectus voluptate nam optio possimus eum! Perspiciatis, itaque.
                </span>

                <span className='grid grid-cols-3 text-sm items-center justify-start gap-x-8 py-3.5 px-5 w-full bg-green-400 sm:text-base sm:grid-cols-4 sm:gap-x-16'>
                    <span className='flex items-center justify-start font-semibold'>
                        <BsFillCalendarCheckFill className='mr-1.5' />starts on
                    </span>
                    <span className='col-span-2 sm:col-span-3'>12 sep 2013-22 sep 2023</span>
                </span>

                <span className='grid grid-cols-3 text-sm items-center justify-start gap-x-8 py-3.5 px-5 w-full bg-green-400 sm:text-base sm:grid-cols-4 sm:gap-x-16'>
                    <span className='flex items-center justify-start font-semibold'>
                        <BsClockFill className='mr-1.5' />starts on
                    </span>
                    <span className='col-span-2 sm:col-span-3'>10 Days &nbsp; 9 Nights</span>
                </span>

                <span className='grid grid-cols-1 gap-y-2.5 text-xs items-start justify-start gap-x-8 py-3.5 px-5 w-full sm:grid-cols-4 sm:gap-x-16'>
                    <span className='flex items-center justify-start font-semibold'>
                        Destination :
                    </span>
                    <span className='sm:col-span-3'>Agaith Island</span>
                </span>

                <span className='grid grid-cols-1 gap-y-2.5 text-xs items-start justify-start gap-x-8 py-3.5 px-5 w-full sm:grid-cols-4 sm:gap-x-16'>
                    <span className='flex items-center justify-start font-semibold'>
                        Highlights :
                    </span>
                    <span className='grid grid-cols-1 gap-y-2.5 sm:col-span-3'>
                        {Highlights}
                    </span>
                </span>

                <span className='grid grid-cols-1 gap-y-2.5 text-xs items-start justify-start gap-x-8 py-3.5 px-5 w-full sm:grid-cols-4 sm:gap-x-16'>
                    <span className='flex items-center justify-start font-semibold'>
                        About :
                    </span>
                    <span className='sm:col-span-3'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate autem at ut, quae tempora impedit mollitia odit, corporis, repudiandae nulla culpa adipisci molestiae saepe iusto sit consequatur consectetur? Expedita, repellendus?
                    </span>
                </span>
            </span>

            <span className='text-left text-xs font-normal flex flex-col items-start justify-center w-full gap-y-5'>
                <span className='flex items-center justify-center text-sm font-semibold text-green-700'>
                    <BsFillCircleFill className='text-md mt-0.5 mr-1 text-green-500 ' />
                    Trip Details
                </span>
                <span className='text-justify'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem animi, nemo quibusdam quod laudantium quas blanditiis ipsam non provident qui. Corporis officiis maiores soluta, harum excepturi vero atque, dolores pariatur nihil repellendus delectus.
                </span>

                <span className='grid grid-cols-1 gap-y-2.5 text-xs items-start justify-start gap-x-8 py-3.5 px-5 w-full sm:gap-x-16'>
                    <span className='flex items-center justify-start font-semibold'>
                        Tour itinerary :
                    </span>
                    <span className='grid gap-y-3 grid-cols-1 w-full'>
                        {tourItinerary}
                    </span>
                </span>
            </span>

        </div>
    )
}