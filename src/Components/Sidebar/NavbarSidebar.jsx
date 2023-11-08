import React, { useState } from 'react'

// react icons
import { MdArrowDropDown } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'
import { BsSlashLg } from 'react-icons/bs'
import { AiTwotoneHome } from 'react-icons/ai'
import { FaHotel } from 'react-icons/fa'
import { MdNightsStay } from 'react-icons/md'
import { MdFlightTakeoff } from 'react-icons/md'
import { BsFillCarFrontFill } from 'react-icons/bs'
import { FcAbout } from 'react-icons/fc'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { FaBloggerB } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'

function NavbarSidebar(props) {
    const [active, setActive] = useState({
        hotels: false,
        packages: false,
        flights: false,
    })

    const handleClick = (name) => {
        if (name == 'hotels') {
            setActive({
                hotels: true,
                packages: false,
                flights: false
            })
        }
        else if (name == 'packages') {
            setActive({
                hotels: false,
                packages: true,
                flights: false
            })
        }
        else if (name == 'flights') {
            setActive({
                hotels: false,
                packages: false,
                flights: true
            })
        }
    }

    return (
        <>
            <div className={` z-10 duration-500 ${props.show ? 'translate-x-full' : 'translate-x-0'} py-8 flex items-start flex-col justify-start px-6 fixed h-full w-full bg-[#0c192e] top-0 right-0 sm:w-72`}>

                <span className='flex gap-y-8 flex-col items-start justify-center'>
                    <span className='text-gray-300 flex items-center gap-x-6 justify-center'>
                        <FaUserAlt className='text-3xl' />
                        <span className='flex gap-x-1.5 items-center justify-center'>
                            <a className='cursor-pointer hover:underline' href="">Sign In</a>
                            <BsSlashLg />
                            <a className='cursor-pointer hover:underline' href="">Register</a>
                        </span>
                    </span>

                    <ul className='flex flex-col text-gray-300 gap-y-2.5 items-start justify-center'>
                        <li className='cursor-pointer'>
                            <a className='flex items-center gap-x-2.5 justify-center text-md' href="/">
                                <AiTwotoneHome className='text-xl' /> Home
                            </a>
                        </li>
                        <li className='cursor-pointer'>
                            <a className='flex items-center justify-start text-md' onClick={() => handleClick('hotels')}>
                                <FaHotel className='text-xl mr-2.5' /> Hotels
                                <MdArrowDropDown className={`text-xl duration-200 ${active.hotels ? 'rotate-0' : '-rotate-90'}`} />
                            </a>
                            <span className={`${active.hotels ? 'flex' : 'hidden'} items-center justify-center`}>
                                <ul className='grid grid-cols-1 list-none text-xs gap-y-0.5 flex-col items-start justify-center mb-5 mt-2 pl-5 rounded-md'>
                                    <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'
                                        onClick={() => {
                                            document.location.href = (`/destination/hotels?destination=United States&countryId=US`)
                                        }}>
                                        United State Hotels
                                    </li>
                                    <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'
                                        onClick={() => {
                                            document.location.href = (`/destination/hotels?destination=United Kingdom&countryId=GB`)
                                        }}>
                                        United kingdom Hotels
                                    </li>
                                    <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'
                                        onClick={() => {
                                            document.location.href = (`/destination/hotels?destination=France&countryId=FR`)
                                        }}>
                                        France Hotels
                                    </li>
                                    <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'
                                        onClick={() => {
                                            document.location.href = (`/destination/hotels?destination=India&countryId=IN`)
                                        }}>
                                        India Hotels
                                    </li>
                                    <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'
                                        onClick={() => {
                                            document.location.href = (`/destination/hotels?destination=Japan&countryId=JP`)
                                        }}>
                                        Japan Hotels
                                    </li>
                                    <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'
                                        onClick={() => {
                                            document.location.href = (`/destination/hotels?destination=Spain&countryId=ES`)
                                        }}>
                                        Spain Hotels
                                    </li>
                                    <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'
                                        onClick={() => {
                                            document.location.href = (`/destination/hotels`)
                                        }}>
                                        All Hotels
                                    </li>
                                </ul>
                            </span>
                        </li>

                        <li className='cursor-pointer'>
                            <a className='flex items-center justify-start text-md' onClick={() => handleClick('packages')}>
                                <MdNightsStay className='text-xl mr-2.5' /> Packages
                                <MdArrowDropDown className={`text-xl duration-200 ${active.packages ? 'rotate-0' : '-rotate-90'}`} />
                            </a>
                            <span className={`${active.packages ? 'flex' : 'hidden'} items-center justify-center`}>
                                <ul className='grid grid-cols-1 list-none text-xs gap-y-0.5 flex-col items-start justify-center mb-5 mt-2 pl-5 rounded-md'>
                                    <li className='text-left cursor-pointer px-3 py-0.5 rounded-md hover:bg-[#0000001f]'
                                        onClick={() => document.location.href = (`/package?package='Las Vegas Vacations'&id=1`)} >
                                        Las Vegas Vacations
                                    </li>
                                    <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'
                                        onClick={() => document.location.href = (`/package?package='Orlando Vacations'&id=2`)}>
                                        Orlando Vacations
                                    </li>
                                    <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'
                                        onClick={() => document.location.href = (`/package?package='New York Vacations'&id=3`)}>
                                        New York Vacations
                                    </li>
                                    <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'
                                        onClick={() => document.location.href = (`/package?package='Miami Vacations'&id=4`)}>
                                        Miami Vacations
                                    </li>
                                    <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'
                                        onClick={() => document.location.href = (`/package?package='San Diago Vacations'&id=5`)}>
                                        San Diago Vacations
                                    </li>
                                    <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'
                                        onClick={() => document.location.href = (`/package?package='San Francisco Vacations'&id=6`)}>
                                        San Francisco Vacations
                                    </li>
                                    <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'
                                        onClick={() => document.location.href = (`/package?package='Los Angelas Vacations New Orleans'&id=7`)}>
                                        Los Angeles New Orleans
                                    </li>
                                </ul>
                            </span>
                        </li>
                        <li className='cursor-pointer'>
                            <a className='flex items-center justify-center text-md' onClick={() => handleClick('flights')}>
                                <MdFlightTakeoff className='text-xl mr-2.5' /> Flights
                                <MdArrowDropDown className={`text-xl duration-200 ${active.flights ? 'rotate-0' : '-rotate-90'}`} />
                            </a>
                        </li>
                        {/* <li className='cursor-pointer'>
                            <a className='flex items-center justify-center text-md' href="">
                                <BsFillCarFrontFill className='text-xl mr-2.5' /> Car Rentals
                                <MdArrowDropDown className='text-xl -rotate-90' />
                            </a>
                        </li> */}
                        <li className='cursor-pointer'>
                            <a className='flex items-center gap-x-2.5 justify-center text-md' href="">
                                <FcAbout className='text-xl' /> About us
                            </a>
                        </li>
                        <li className='cursor-pointer'>
                            <a className='flex items-center gap-x-2.5 justify-center text-md' href="">
                                <BiSolidPhoneCall className='text-xl' /> Contact us
                            </a>
                        </li>
                        <li className='cursor-pointer'>
                            <a className='flex items-center gap-x-2.5 justify-center text-md' href="">
                                <FaBloggerB className='text-xl' /> Blog
                            </a>
                        </li>
                    </ul>

                    <span className='absolute flex items-center justify-center text-gray-300 bottom-4 text-md'><MdLogout className='text-xl mr-2.5' />Logout</span>
                </span>
            </div>
        </>
    )
}

export default NavbarSidebar