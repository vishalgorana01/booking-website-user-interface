import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Assets/CSS/Global.css'

// Images
import AirCaspian from '../../Assets/Images/Air Caspian.png'
import SouthPacific from '../../Assets/Images/South Pacific Specialist.png'
import EnchantingEscapes from '../../Assets/Images/Enchanting Escapes Travel.png'
import TurismoLaIsla from '../../Assets/Images/Tursimo La Isla.png'

// React Icons
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { GrLocation } from 'react-icons/gr'

function Footer() {
    const navigate = useNavigate();

    return (
        <section className='footerBg relative gap-y-4 flex-col flex items-center justify-center mt-10 w-screen px-3 sm:px-12'>
            <div className='flex flex-col items-center justify-center w-full max-w-7xl py-5'>
                <span className='grid grid-cols-1 gap-y-10 gap-x-5 place-items-start text-left w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <span className='flex flex-col gap-y-5 px-6 items-start justify-center w-full'>
                        <h2 className='text-sm lg:text-base tracking-wide font-semibold -ml-6'>Vacation Packages</h2>
                        <ul className='flex list-disc text-xs gap-y-2.5 flex-col items-start justify-center'>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'
                            onClick={()=> document.location.href = (`/package?package='Las Vegas Vacations'&id=1`)} >Las Vegas Vacations
                            </li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'
                            onClick={()=> document.location.href = (`/package?package='Orlando Vacations'&id=2`)}>Orlando Vacations</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'
                            onClick={()=> document.location.href = (`/package?package='New York Vacations'&id=3`)}>New York Vacations</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'
                            onClick={()=> document.location.href = (`/package?package='Miami Vacations'&id=4`)}>Miami Vacations</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'
                            onClick={()=> document.location.href = (`/package?package='San Diago Vacations'&id=5`)}>San Diago Vacations</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'
                            onClick={()=> document.location.href = (`/package?package='San Francisco Vacations'&id=6`)}>San Francisco Vacations</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'
                            onClick={()=> document.location.href = (`/package?package='Los Angelas Vacations New Orleans'&id=7`)}>Los Angelas Vacations New Orleans</li>
                        </ul>
                    </span>

                    <span className='flex flex-col gap-y-5 px-6 items-start justify-center w-full'>
                        <h2 className='text-sm lg:text-base tracking-wide font-semibold -ml-6'>Booking Tickets</h2>
                        <ul className='flex list-disc text-xs gap-y-2.5 flex-col items-start justify-center'>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>Sydney Hotels</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>Boston Hotels</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>Walt Disney World Area Hotels</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>Las Vegas Hotels</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>Maui Hotels</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>New York Hotels</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>San Francisco Hotels</li>
                        </ul>
                    </span>

                    <span className='flex flex-col gap-y-5 px-6 items-start justify-center w-full'>
                        <h2 className='text-sm lg:text-base tracking-wide font-semibold -ml-6'>Flight Tickets</h2>
                        <ul className='flex list-disc text-xs gap-y-2.5 flex-col items-start justify-center'>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>Flights to New York</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>Flights to Las Vegas</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>Flights to Los Angeles</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>Flights to Orlando</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>Flights to Miami</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>Flights to San Francisco</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>Flights to Chicago</li>
                        </ul>
                    </span>

                    <span className='flex flex-col gap-y-5 px-6 items-start justify-center w-full sm:col-span-1 md:col-span-2 lg:col-span-1'>
                        <h2 className='text-sm lg:text-base tracking-wide font-semibold -ml-6'>Trusted by</h2>
                        <span className='grid grid-cols-2 place-items-start w-full gap-3.5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2'>
                            <img className='w-32' src={EnchantingEscapes} alt="loading error" />
                            <img className='w-32' src={TurismoLaIsla} alt="loading error" />
                            <img className='w-32' src={SouthPacific} alt="loading error" />
                            <img className='w-32' src={AirCaspian} alt="loading error" />
                        </span>
                    </span>
                </span>
            </div>

            <div className='flex text-white items-center justify-center bg-green-700 w-screen py-3.5 px-3 sm:px-12'>
                <span className='flex flex-col gap-y-5 items-center justify-between w-full lg:flex-row max-w-7xl'>
                    <ul className='flex list-none text-xs md:text-sm gap-x-2.5 gap-y-2.5 items-start justify-center'>
                        <li className='cursor-pointer hover:-translate-y-1 duration-300'>Home</li>
                        |
                        <li className='cursor-pointer hover:-translate-y-1 duration-300'>About</li>
                        |
                        <li className='cursor-pointer hover:-translate-y-1 duration-300'>Services</li>
                        |
                        <li className='cursor-pointer hover:-translate-y-1 duration-300'>Packages</li>
                        |
                        <li className='cursor-pointer hover:-translate-y-1 duration-300'>Contact us</li>
                    </ul>

                    <span className='flex items-center justify-center'>
                        <h4 className='text-sm lg:text-base'>Follow us on : &nbsp; &nbsp;</h4>
                        <span className='flex text-sm lg:text-base gap-x-1.5 items-center justify-center'>
                            <span className='p-2 bg-[#448c5f] cursor-pointer text-white hover:-translate-y-1 duration-300'>
                                <FaFacebookF />
                            </span>
                            <span className='p-2 bg-[#448c5f] cursor-pointer text-white hover:-translate-y-1 duration-300'>
                                <FaTwitter />
                            </span>
                            <span className='p-2 bg-[#448c5f] cursor-pointer text-white hover:-translate-y-1 duration-300'>
                                <FaInstagramSquare />
                            </span>
                            <span className='p-2 bg-[#448c5f] cursor-pointer text-white hover:-translate-y-1 duration-300'>
                                <FaLinkedinIn />
                            </span>
                        </span>
                    </span>
                </span>
            </div>

            <div className='flex items-center justify-center w-screen py-5 lg:py-10 px-3 sm:px-12'>
                <span className='flex flex-col gap-y-12 items-start justify-between w-full max-w-7xl lg:flex-row'>
                    <span className='flex flex-col items-start gap-y-5 justify-center'>
                        <h4 className='text-sm lg:text-base capitalize tracking-wide'>SUBSCRIBE TO NEWSLETTER</h4>
                        <span className='flex relative items-center justify-start rounded-sm py-1.5' style={{ border: '2px solid black' }}>
                            <input
                                type="email"
                                placeholder='Email'
                                className='outline-none text-black w-full border-none px-2.5'
                                style={{ borderRight: '1px solid black' }} />
                            <span className='text-xs font-semibold cursor-pointer tracking-wide px-2.5'>SEND</span>
                            <span className='text-xs italic absolute -bottom-5'>*we don't spam</span>
                        </span>
                    </span>

                    <span className='flex items-start gap-y-5 justify-center'>
                        <span className='flex gap-y-5 flex-col items-start justify-center pr-5' style={{ borderRight: '1px solid black' }}>
                            <span className='flex gap-x-3 items-start justify-start'>
                                <FiPhoneCall className='mt-1.5 text-2xl' />
                                <span className='text-xs sm:text-sm text-left'>
                                    1-1920-305-3324 <br /> 1-1920-305-4424
                                </span>
                            </span>
                            <span className='flex gap-x-3 items-start justify-start'>
                                <HiOutlineMail className='text-2xl' />
                                <span className='text-xs sm:text-sm'>
                                    hotelio@gmail.com
                                </span>
                            </span>
                        </span>
                        <span className='flex gap-y-5 flex-col items-start justify-center pl-5'>
                            <span className='flex gap-x-3 items-start justify-start'>
                                <GrLocation className='mt-1.5 text-2xl' />
                                <span className='text-xs sm:text-sm text-left'>
                                    78 5th Ave, New York <br /> NY 1011, USA
                                </span>
                            </span>
                        </span>
                    </span>
                </span>
            </div>

            <div className='flex items-center justify-center mt-5 py-2.5 w-screen  px-3 sm:px-12'>
                <span className='flex flex-col items-center justify-between w-full max-w-7xl lg:flex-row'>
                    <span className='text-xs'>© copyright hotelio 2023 @ ora</span>
                    <span className='flex items-center justify-center'>
                        <span className='text-xs cursor-pointer duration-300 hover:-translate-y-1'>Help</span>
                        &nbsp; | &nbsp;
                        <span className='text-xs cursor-pointer duration-300 hover:-translate-y-1'>Privacy Terms</span>
                        &nbsp; | &nbsp;
                        <span className='text-xs cursor-pointer duration-300 hover:-translate-y-1'>Send Feedback</span>
                    </span>
                </span>
            </div>

        </section>
    )
}

export default Footer

// background link :- https://dtora.wpengine.com/wp-content/uploads/2019/03/footer-bg.png