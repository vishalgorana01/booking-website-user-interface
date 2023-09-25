import React from 'react'

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
                            <a className='flex items-center gap-x-2.5 justify-center text-md' href="">
                                <AiTwotoneHome className='text-xl' /> Home
                            </a>
                        </li>
                        <li className='cursor-pointer'>
                            <a className='flex items-center justify-center text-md' href="">
                                <FaHotel className='text-xl mr-2.5' /> Hotels
                                <MdArrowDropDown className='text-xl -rotate-90' />
                            </a>
                        </li>
                        <li className='cursor-pointer'>
                            <a className='flex items-center justify-center text-md' href="">
                                <MdNightsStay className='text-xl mr-2.5' /> Stay
                                <MdArrowDropDown className='text-xl -rotate-90' />
                            </a>
                        </li>
                        <li className='cursor-pointer'>
                            <a className='flex items-center justify-center text-md' href="">
                                <MdFlightTakeoff className='text-xl mr-2.5' /> Flights
                                <MdArrowDropDown className='text-xl -rotate-90' />
                            </a>
                        </li>
                        <li className='cursor-pointer'>
                            <a className='flex items-center justify-center text-md' href="">
                                <BsFillCarFrontFill className='text-xl mr-2.5' /> Car Rentals
                                <MdArrowDropDown className='text-xl -rotate-90' />
                            </a>
                        </li>
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