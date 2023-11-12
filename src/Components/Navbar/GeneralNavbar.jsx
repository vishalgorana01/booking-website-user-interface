import React, { useState } from 'react'

// Import Global css
import '../../Assets/CSS/Global.css'

// ReactIcons
import { RiFacebookFill } from 'react-icons/ri';
import { FaInstagram, FaSearch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { MdArrowDropDown } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { AiOutlineShop } from 'react-icons/ai'
import NavbarSidebar from '../Sidebar/NavbarSidebar';
import { searchData } from '../HardData/HotelsSearchData';

function GeneralNavbar(props) {
    const [showHide, setShowHide] = useState(true);
    const [search, setSearch] = useState('');
    const [search_options, set_search_options] = useState([]);

    const handleChange = (val) => {
        setSearch(val);

        if (val != '') {
            set_search_options(
                searchData.map((ele, index) => {
                    if (ele.hotel_name.toLowerCase().includes(search.toLowerCase()) || ele.city.toLowerCase().includes(search.toLowerCase()) || ele.state.toLowerCase().includes(search.toLowerCase()) || ele.country.toLowerCase().includes(search.toLowerCase())) {
                        return (
                            <span key={index} className='text-sm font-semibold w-full py-2 px-3 rounded-md cursor-pointer hover:bg-[#00000038]'
                                style={{ borderBottom: '1px solid black' }}
                                onClick={() => {
                                    document.location.href = (`/hotel?hotel='${ele.hotel_name}'&id=${ele.hotel_id}`)
                                }}
                            >{ele.hotel_name}, {ele.city}, {ele.state}, {ele.country}</span>
                        )
                    }
                })
            )
        }
        else {
            set_search_options([])
        }
    }

    return (
        <>
            <section className={`z-10 py-3 px-5 text-gray-400 absolute top-0 flex flex-col items-center justify-center w-screen`} style={{ backgroundColor: props.bgColor, color: props.color }}>
                <div className='flex flex-col gap-y-2.5 items-center justify-center w-full max-w-7xl'>

                    <span className='hidden  items-center justify-between w-full lg:flex'>
                        <span className='text-[0.7rem] gap-x-3 flex items-center justify-center'>
                            <p className='font-extralight'>+91 78905 54323</p>
                            <p className='font-extralight'>+91 56789 34569</p>
                        </span>

                        <span className='text-[0.85rem] gap-x-2 flex items-center justify-center'>
                            <RiFacebookFill className='cursor-pointer' />
                            <FaYoutube className='cursor-pointer' />
                            <FaInstagram className='cursor-pointer' />
                            <FaTwitter className='cursor-pointer' />
                            <span className='text-[0.8rem] ml-3 flex items-center justify-center'>
                                <AiOutlineUser className='mr-1.5' />
                                <a className=' cursor-pointer transition-all duration-300 hover:underline' href="/Login">sign in</a>&nbsp;/&nbsp;<a className=' cursor-pointer transition-all duration-300 hover:underline' href="/Register">register</a>
                            </span>
                        </span>
                    </span>

                    <span className='z-20 w-screen' style={{ borderTop: '1px solid #8e8888' }}></span>

                    <span className='flex relative items-center justify-between w-full'>
                        <span className='flex gap-x-3 items-center justify-start'>
                            <h1 className='text-xl'>Hotelio</h1>
                            <label htmlFor="" className='flex items-center justify-start '>
                                <input type="text" value={search} onChange={(ele) => handleChange(ele.currentTarget.value)} className='px-0.5 overflow-hidden mr-1 text-[0.7rem] outline-none bg-transparent' placeholder='search by location,name' style={{ borderBottom: '1px solid #8e8888' }} />
                                <FaSearch />
                            </label>
                        </span>

                        <ul className='hidden text-[0.75rem] font-normal items-center justify-center gap-x-4 lg:flex'>
                            <li className='cursor-pointer'><a href="/">Home</a></li>
                            <li className='hotelsHover flex relative items-center justify-center cursor-pointer'>
                                <a href="">Hotels</a> <MdArrowDropDown className='text-xl mt-0.5' />
                                <span className='hotels absolute top-2.5 pt-5 left-auto w-96 rounded-md shadow-xl'>
                                    {/* triangle */}
                                    <span className='absolute left-[11rem] bg-white top-2.5 h-5 w-5 lg:inline-block' style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></span>
                                    <ul className='grid grid-cols-2 list-none text-black text-xs gap-x-2 gap-y-1.5 flex-col items-start justify-center bg-white py-5 px-3.5 rounded-md'>
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

                            <li className='packagesHover flex items-center justify-center cursor-pointer'>
                                <a href="">Packages</a> <MdArrowDropDown className='text-xl mt-0.5' />
                                <span className='packages absolute top-2.5 pt-5 left-auto w-96 rounded-md shadow-xl'>
                                    {/* triangle */}
                                    <span className='absolute left-[11rem] bg-white top-2.5 h-5 w-5 lg:inline-block' style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></span>
                                    <ul className='grid grid-cols-2 list-none text-black text-xs gap-x-2 gap-y-1.5 flex-col items-start justify-center bg-white py-5 px-3.5 rounded-md'>
                                        <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'
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

                            <li className='flightsHover flex items-center justify-center cursor-pointer'>
                                <a href="">Flights</a> <MdArrowDropDown className='text-xl mt-0.5' />
                                <span className='flights absolute top-2.5 pt-5 left-auto w-96 rounded-md shadow-xl'>
                                    {/* triangle */}
                                    <span className='absolute left-[11rem] bg-white top-2.5 h-5 w-5 lg:inline-block' style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></span>
                                    <ul className='grid grid-cols-2 list-none text-black text-xs gap-x-2 gap-y-1.5 flex-col items-start justify-center bg-white py-5 px-3.5 rounded-md'>
                                        <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'>
                                            Flights to New York
                                        </li>
                                        <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'>
                                            Flights to Las Vegas
                                        </li>
                                        <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'>
                                            Flights to Los Angeles
                                        </li>
                                        <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'>
                                            Flights to Orlando
                                        </li>
                                        <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'>
                                            Flights to Miami
                                        </li>
                                        <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'>
                                            Flights to San Francisco
                                        </li>
                                        <li className='text-left cursor-pointer px-3 py-2 rounded-md hover:bg-[#0000001f]'>
                                            Flights to Chicago
                                        </li>
                                    </ul>
                                </span>
                            </li>

                            {/* <li className='flex items-center justify-center cursor-pointer'><a href="">Car rentals</a> <MdArrowDropDown className='text-xl mt-0.5' /></li> */}
                            <li className='flex items-center justify-center cursor-pointer'><a href="">About us</a></li>
                            <li className='flex items-center justify-center cursor-pointer'><a href="">Contact us</a></li>
                            <li className='flex items-center justify-center cursor-pointer'><a href="">Blog</a></li>
                            <li><a href=""><AiOutlineShop className='text-xl' /></a></li>
                            <li><button className='cursor-pointer px-3 py-1 text-black text-[0.65rem]' style={{ backgroundColor: '#c8bcbc' }}>Expert Reviews</button></li>
                        </ul>

                        <span className='fixed top-6 right-5 z-20 text-2xl lg:hidden'>
                            {showHide ?
                                <FiMenu onClick={() => setShowHide(!showHide)} />
                                :
                                <AiFillCloseCircle onClick={() => setShowHide(!showHide)} />}
                        </span>
                    </span>


                    <NavbarSidebar show={showHide} />
                </div>

                {/* searching input fields */}
                <div className='flex items-center justify-start mt-3 w-full max-w-7xl'>
                    <div className='flex flex-col text-left items-center justify-start text-black w-full bg-white rounded-md max-w-xl max-h-80 overflow-y-scroll'>
                        {search_options.length != 0 ?
                            search_options :
                            ''
                        }
                    </div>
                </div>

                <span className={`${showHide ? 'hidden' : 'flex'} fixed left-0 top-0 w-screen h-screen z-0 bg-[#000000c4]`} onClick={() => setShowHide(!showHide)}></span>

            </section>
        </>
    )
}

export default GeneralNavbar