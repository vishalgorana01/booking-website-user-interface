import React, { useState } from 'react'

// ReactIcons
import { RiFacebookFill } from 'react-icons/ri';
import { FaInstagram, FaSearch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { MdArrowDropDown } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { AiOutlineShop } from 'react-icons/ai'
import NavbarSidebar from '../Sidebar/NavbarSidebar';

function GeneralNavbar(props) {
    const [showHide, setShowHide] = useState(true);

    return (
        <>
            <section className={`z-10 py-3 px-5 text-gray-400 absolute top-0 flex items-center justify-center w-screen`} style={{backgroundColor: props.bgColor, color: props.color}}>
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
                        <span className='flex gap-x-3 items-center justify-center'>
                            <h1 className='text-xl'>Hotelio</h1>
                            <label htmlFor="" className='flex items-center justify-center'>
                                <input type="text" className='px-0.5 overflow-hidden w-24 mr-1 text-[0.7rem] outline-none bg-transparent' placeholder='search by location,name' style={{ borderBottom: '1px solid #8e8888' }} />
                                <FaSearch />
                            </label>
                        </span>

                        <ul className='hidden text-[0.75rem] font-normal items-center justify-center gap-x-4 lg:flex'>
                            <li className='cursor-pointer'><a href="">Home</a></li>
                            <li className='flex items-center justify-center cursor-pointer'><a href="">Hotels</a> <MdArrowDropDown className='text-xl mt-0.5' /></li>
                            <li className='flex items-center justify-center cursor-pointer'><a href="">Stay</a> <MdArrowDropDown className='text-xl mt-0.5' /></li>
                            <li className='flex items-center justify-center cursor-pointer'><a href="">Flights</a> <MdArrowDropDown className='text-xl mt-0.5' /></li>
                            <li className='flex items-center justify-center cursor-pointer'><a href="">Car rentals</a> <MdArrowDropDown className='text-xl mt-0.5' /></li>
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

                <span className={`${showHide? 'hidden':'flex'} fixed left-0 top-0 w-screen h-screen z-0 bg-[#000000c4]`} onClick={() => setShowHide(!showHide)}></span>

            </section>
        </>
    )
}

export default GeneralNavbar