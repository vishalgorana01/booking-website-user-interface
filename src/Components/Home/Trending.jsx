import React, { useState } from 'react'

// react icons
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsCurrencyPound } from 'react-icons/bs'
import { RiStarSFill } from 'react-icons/ri'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'

// Trending Data
// import hotelsArray from '../HardData/TrendingData.jsx'
import {trendingHotels} from '../HardData/TrendingData.jsx'

function Trending() {
    // console.log(Data)
    const [activeTrending, setActiveTrending] = useState(
        {
            hotels: true,
            tours: false,
            stays: false,
        }
    );

    // Rating
    const RateData = [1,2,3,4,5];

    const rating = (rate)=> {
        return (
            RateData.map((ele,index)=> {
                return(
                    <RiStarSFill key={index} className={`${rate > index ? 'text-yellow-500': 'text-gray-500'}`} />
                )
            })
        )
    }

    const data = [1, 2, 3, 4, 5, 6, 7, 8]

    const [hotelsArray, setHotelsArray] = useState(trendingHotels.map((ele, index) => {
        return (
            <span key={index} className='flex cursor-pointer flex-col w-64 items-center justify-center'>
                <span className='relative w-full text-gray-300'>
                    <img src={`${ele.img}`} alt="error loading" />
                    <span className='absolute w-full h-full top-0 left-0 bg-blend-darken' style={{ background: 'linear-gradient(180deg, black, transparent)' }}></span>
                    <AiOutlineHeart className='absolute top-2.5 right-2.5 cursor-pointer' />
                    {/* <AiFillHeart className='absolute top-2 right-2 text-red-500 cursor-pointer'/> */}
                    <span className='absolute bottom-2.5 left-2.5 flex w-full items-start justify-center flex-col'>
                        {/* <h6 className='italic text-xs'>tour title</h6> */}
                        <h4 className='flex text-gray-200 text-sm font-bold items-center justify-center'>from <BsCurrencyPound className='ml-1.5' />{ele.price}</h4>
                    </span>
                </span>

                <span className='flex text-black gap-y-1.5 flex-col w-full items-start px-2.5 py-3.5 justify-center'>
                    <span className='flex items-center text-gray-600 text-left text-xs justify-center'>
                        <HiOutlineLocationMarker className='mr-1.5' />{ele.address}
                    </span>
                    <span className='font-sans font-semibold text-md text-left'>{ele.name}</span>
                    <span className='text-xs text-gray-600 text-left'>{ele.shortDescription}</span>
                    <span className='flex items-center text-xs text-gray-500 font-semibold justify-start'>
                        <span className='flex items-center justify-center mr-1.5'>
                            {rating(ele.rating)}
                        </span>
                        48 Reviews
                    </span>
                    <button className='text-xs text-gray-900 cursor-pointer duration-300 underline hover:-translate-y-1'>Read more</button>
                </span>
            </span>
        )
    }))

    const [toursArray, setToursArray] = useState(data.map((ele, index) => {
        return (
            <span key={index} className='flex cursor-pointer flex-col w-64 items-center justify-center'>
                <span className='relative w-full text-gray-300'>
                    <img src={`https://img.freepik.com/free-photo/sant-angelo_181624-10349.jpg?w=900&t=st=1688928194~exp=1688928794~hmac=394ee1e90d402cece5c5377734976ca1e66b8344da59f948d1cb138e26b7c40f`} alt="error loading" />
                    <span className='absolute w-full h-full top-0 left-0 bg-blend-darken' style={{ background: 'linear-gradient(180deg, black, transparent)' }}></span>
                    <AiOutlineHeart className='absolute top-2.5 right-2.5 cursor-pointer' />
                    {/* <AiFillHeart className='absolute top-2 right-2 text-red-500 cursor-pointer'/> */}
                    <span className='absolute bottom-2.5 left-2.5 flex w-full items-start justify-center flex-col'>
                        <h6 className='italic text-xs'>tour title</h6>
                        <h4 className='flex text-sm font-bold items-center justify-center'>from <BsCurrencyPound className='ml-1.5' /> 560.00</h4>
                    </span>
                </span>

                <span className='flex text-black gap-y-1.5 flex-col w-full items-start px-2.5 py-3.5 justify-center'>
                    <span className='flex items-center text-gray-600 text-xs justify-center'>
                        <HiOutlineLocationMarker className='mr-1.5' />Sehore, Bhopal, Madhya Pradesh
                    </span>
                    <span className='font-sans font-semibold text-md text-left'>Two hour walking tour of Maharashtra</span>
                    <span className='flex items-center text-xs text-gray-500 font-semibold justify-start'>
                        <span className='flex items-center justify-center text-yellow-500 mr-1.5'>
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                        </span>
                        48 Reviews
                    </span>
                </span>
            </span>
        )
    }))

    const [staysArray, setStaysArray] = useState(data.map((ele, index) => {
        return (
            <span key={index} className='flex cursor-pointer flex-col w-64 items-center justify-center'>
                <span className='relative w-full text-gray-300'>
                    <img src={`https://img.freepik.com/free-photo/luxury-bedroom-with-modern-design-comfortable-bedding-generated-by-ai_188544-24227.jpg?t=st=1688940146~exp=1688943746~hmac=320d1a785e09a6807b0ef8d5e0147f1a057144599623567ae351b20af21cb6ee&w=1060`} alt="error loading" />
                    <AiOutlineHeart className='absolute top-2.5 right-2.5 cursor-pointer' />
                    {/* <AiFillHeart className='absolute top-2 right-2 text-red-500 cursor-pointer'/> */}
                    <span className='absolute bottom-2.5 left-2.5 flex w-full items-start justify-center flex-col'>
                        <h6 className='italic text-xs'>tour title</h6>
                        <h4 className='flex text-sm font-bold items-center justify-center'>from <BsCurrencyPound className='ml-1.5' /> 560.00</h4>
                    </span>
                </span>

                <span className='flex text-black gap-y-1.5 flex-col w-full items-start px-2.5 py-3.5 justify-center'>
                    <span className='flex items-center text-gray-600 text-xs justify-center'>
                        <HiOutlineLocationMarker className='mr-1.5' />Sehore, Bhopal, Madhya Pradesh
                    </span>
                    <span className='font-sans font-semibold text-md text-left'>Two hour walking tour of Maharashtra</span>
                    <span className='flex items-center text-xs text-gray-500 font-semibold justify-start'>
                        <span className='flex items-center justify-center text-yellow-500 mr-1.5'>
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                        </span>
                        48 Reviews
                    </span>
                </span>
            </span>
        )
    }))

    const [trendingArrays, setTrendingArray] = useState(hotelsArray)

    const clickonTrending = (given) => {
        if (given == 'hotels') {
            setActiveTrending({
                hotels: true,
                tours: false,
                stays: false
            })

            setTrendingArray(hotelsArray)
        }
        else if (given == 'tours') {
            setActiveTrending({
                hotels: false,
                tours: true,
                stays: false
            })

            setTrendingArray(toursArray)
        }
        else if (given == 'stays') {
            setActiveTrending({
                hotels: false,
                tours: false,
                stays: true
            })

            setTrendingArray(staysArray)
        }
    }


    return (
        <>
            <section className='flex items-center justify-center w-screen py-12 px-6 sm:px-8 lg:py-16 lg:px-10'>
                <div className='flex flex-col items-center justify-center w-full max-w-7xl '>
                    <h1 className='text-2xl font-semibold font-sans'>Trending</h1>
                    <span className=' w-10 border-[#222a3b] border-2 rounded-2xl mt-2.5 border-solid mb-3.5'></span>

                    <ul className='flex items-center justify-center gap-x-3.5 gap-y-5 mb-3.5'>
                        <li className={`${activeTrending.hotels ? 'bg-blue-500 text-gray-300' : 'bg-transparent text-black'} cursor-pointer text-center rounded-full font-semibold text-sm font-sans py-1 px-5 md:text-md`}
                            onClick={() => clickonTrending('hotels')}>
                            Hotels
                        </li>
                        <li className={`${activeTrending.tours ? 'bg-blue-500 text-gray-300' : 'bg-transparent text-black'} cursor-pointer text-center rounded-full font-semibold text-sm font-sans py-1 px-5 md:text-md`}
                            onClick={() => clickonTrending('tours')}>
                            Tours
                        </li>
                        <li className={`${activeTrending.stays ? 'bg-blue-500 text-gray-300' : 'bg-transparent text-black'} cursor-pointer text-center rounded-full font-semibold text-sm font-sans py-1 px-5 md:text-md`}
                            onClick={() => clickonTrending('stays')}>
                            Stays
                        </li>
                    </ul>

                    <span className='flex items-start gap-x-3 gap-y-8 justify-center w-full flex-wrap'>
                        {trendingArrays}
                    </span>
                </div>
            </section>
        </>
    )
}

export default Trending