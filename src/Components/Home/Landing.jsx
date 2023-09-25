import React, { useEffect, useState } from 'react'

// ReactIcons
import { GiPalmTree } from 'react-icons/gi';
// import { FaInstagram, FaSearch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai'
// import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineFlightTakeoff } from 'react-icons/md'
// import { AiOutlineShop } from 'react-icons/ai'
import { RiHotelLine } from 'react-icons/ri'
import { LuBed } from 'react-icons/lu'



import '../../Assets/CSS/Global.css'
import Hotels from '../Searching/Hotels';
import Stay from '../Searching/Stay';
import Flights from '../Searching/Flights';
import CarRentals from '../Searching/CarRentals';
import Tours from '../Searching/Tours';

function Landing() {

    const [activeSearch, setActiveSearch] = useState({
        hotels: true,
        stays: false,
        flights: false,
        carRentals: false,
        tours: false
    })

    const [backScreen, setBackScreen] = useState(false)
    const clickOnBackScreen = ()=> {
        setBackScreen(!backScreen)
        setSearchingComponent(null)
    }

    const [searchingComponent, setSearchingComponent] = useState(null)

    const SelectSearchComponent = (givenSearch) => {
        if (givenSearch == 'hotels') {
            setBackScreen(!backScreen)
            setActiveSearch({
                hotels: true,
                stays: false,
                flights: false,
                carRentals: false,
                tours: false,
            })

            setSearchingComponent(<Hotels setSearchingComponent={setSearchingComponent} setBackScreen={setBackScreen} />)
        }
        else if (givenSearch == 'stays') {
            setBackScreen(!backScreen)
            setActiveSearch({
                hotels: false,
                stays: true,
                flights: false,
                carRentals: false,
                tours: false,
            })

            setSearchingComponent(<Stay setSearchingComponent={setSearchingComponent} setBackScreen={setBackScreen} />)
        }
        else if (givenSearch == 'flights') {
            setBackScreen(!backScreen)
            setActiveSearch({
                hotels: false,
                stays: false,
                flights: true,
                carRentals: false,
                tours: false,
            })

            setSearchingComponent(<Flights setSearchingComponent={setSearchingComponent} setBackScreen={setBackScreen} />)
        }
        else if (givenSearch == 'carRentals') {
            setBackScreen(!backScreen)
            setActiveSearch({
                hotels: false,
                stays: false,
                flights: false,
                carRentals: true,
                tours: false,
            })

            setSearchingComponent(<CarRentals setSearchingComponent={setSearchingComponent} setBackScreen={setBackScreen} />)
        }
        else if (givenSearch == 'tours') {
            setActiveSearch({
                hotels: false,
                stays: false,
                flights: false,
                carRentals: false,
                tours: true,
            })

            setSearchingComponent(<Tours />)
        }
    }

    useEffect(()=> {
        console.log(window.innerWidth)
        if(window.innerWidth >= 1024){
            setSearchingComponent(<Hotels />)
        }
    }, [])

    return (
        <>
            {/* back screen */}
            <span className={`${backScreen? 'flex':'hidden'} fixed left-0 top-0 w-screen min-h-screen z-[1] bg-[#000000c4] lg:hidden`} onClick={() => clickOnBackScreen()}></span>
            <section className='relative LandingBg flex items-center justify-center w-screen h-[40rem]'>
                <div className='flex flex-col items-center justify-center w-full max-w-7xl'>
                    <h1 className=' text-gray-400 font-medium font-serif tracking-wide text-2xl sm:text-3xl md:text-5xl'>Let's The World Together!</h1>
                    <p className='text-xs font-serif font-extralight mb-5 text-gray-400 italic max-w-[14rem] sm:max-w-[18rem] md:max-w-none'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, consectetur.</p>

                    {/* <SearchingByDate /> */}

                    {/* searching */}
                    <div className='flex relative px-6  gap-y-7 flex-col w-full items-center justify-center lg:absolute lg:-bottom-16'>
                        <ul className='w-full flex flex-wrap items-center gap-x-7 justify-center'>
                            <li className='flex text-xs cursor-pointer hover:text-gray-200 text-gray-400 items-center justify-center gap-x-0.5' onClick={() => SelectSearchComponent('hotels')}><RiHotelLine className='text-5xl p-3.5' style={{ backgroundColor: `${activeSearch.hotels ? 'rgb(11 36 75 / 48%)' : 'transparent'}`, borderRadius: '50%' }} />Hotels</li>
                            <li className='flex text-xs cursor-pointer hover:text-gray-200 text-gray-400 items-center justify-center gap-x-0.5' onClick={() => SelectSearchComponent('stays')}><LuBed className='text-5xl p-3.5' style={{ backgroundColor: `${activeSearch.stays ? 'rgb(11 36 75 / 48%)' : 'transparent'}`, borderRadius: '50%' }} />Stay</li>
                            <li className='flex text-xs cursor-pointer hover:text-gray-200 text-gray-400 items-center justify-center gap-x-0.5' onClick={() => SelectSearchComponent('flights')}><MdOutlineFlightTakeoff className='text-5xl p-3.5' style={{ backgroundColor: `${activeSearch.flights ? 'rgb(11 36 75 / 48%)' : 'transparent'}`, borderRadius: '50%' }} />Flights</li>
                            <li className='flex text-xs cursor-pointer hover:text-gray-200 text-gray-400 items-center justify-center gap-x-0.5' onClick={() => SelectSearchComponent('carRentals')}><AiFillCar className='text-5xl p-3.5' style={{ backgroundColor: `${activeSearch.carRentals ? 'rgb(11 36 75 / 48%)' : 'transparent'}`, borderRadius: '50%' }} />Car rentals</li>
                            <li className='flex text-xs cursor-pointer hover:text-gray-200 text-gray-400 items-center justify-center gap-x-0.5' onClick={() => SelectSearchComponent('tours')}><GiPalmTree className='text-5xl p-3.5' style={{ backgroundColor: `${activeSearch.tours ? 'rgb(11 36 75 / 48%)' : 'transparent'}`, borderRadius: '50%' }} />Tours</li>
                        </ul>

                        {searchingComponent}

                    </div>


                    {/* stay Search */}


                </div>
            </section>
        </>
    )
}

export default Landing