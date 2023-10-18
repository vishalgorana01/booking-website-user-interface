import React from 'react'
import '../../Assets/CSS/Global.css'

// Images
import AirCaspian from '../../Assets/Images/Air Caspian.png'
import SouthPacific from '../../Assets/Images/South Pacific Specialist.png'
import EnchantingEscapes from '../../Assets/Images/Enchanting Escapes Travel.png'
import TurismoLaIsla from '../../Assets/Images/Tursimo La Isla.png'

// React Icons
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
    return (
        <section className='footerBg relative gap-y-4 flex-col flex items-center justify-center mt-10 w-screen px-3 sm:px-12'>
            <div className='flex flex-col items-center justify-center w-full max-w-7xl py-5'>
                <span className='grid grid-cols-1 gap-y-10 gap-x-5 place-items-start text-left w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <span className='flex flex-col gap-y-5 px-6 items-start justify-center w-full'>
                        <h2 className='text-sm lg:text-base tracking-wide font-semibold -ml-6'>Vacation Packages</h2>
                        <ul className='flex list-disc text-xs gap-y-2.5 flex-col items-start justify-center'>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>Las Vegas Vacations</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>Orlando Vacations</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>New York Vacations</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>Miami Vacations</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>San Diago Vacations</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>San Francisco Vacations</li>
                            <li className='cursor-pointer hover:translate-x-2 duration-500'>Los Angelas Vacations New Orleans</li>
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

            <span className='flex text-white items-center justify-center bg-green-700 w-screen py-3.5 px-3 sm:px-12'>
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
            </span>
        </section>
    )
}

export default Footer

// background link :- https://dtora.wpengine.com/wp-content/uploads/2019/03/footer-bg.png