import React from 'react'

// react-icons
import { MdStars, MdLocationOn, MdOutlineNoFood, MdWifi, MdCommute } from 'react-icons/md'
import { BsHeart, BsShare } from 'react-icons/bs'
import { GiDiamonds } from 'react-icons/gi'
import { PiTelevisionBold, PiBathtub } from 'react-icons/pi'
import { IoWifiSharp } from 'react-icons/io'
import { BiSwim, BsJoystick } from 'react-icons/bi'
import ShowCaseRating from '../Utilities/ShowCaseRating'
import Reviews from '../Utilities/Reviews'

function Description(props) {
    const {hotel_details} = props;

    const data = [
    {
        title: 'The best of all the Godness',
        desc: ''
    },
    {
        title: 'Hospatility like your home',
        desc: ''
    },
    {
        title: 'The best of all the Godness',
        desc: ''
    }
]

    const facilities = [
        {
            icon: <PiTelevisionBold className="text-5xl" />,
            title: 'Fully Furnished',
            desc: `With LED TV's & Sofas`
        },
        {
            icon: <MdOutlineNoFood className="text-5xl" />,
            title: 'Custom Food Menu',
            desc: `Free Monitoring Breakfast`
        },
        {
            icon: <PiBathtub className="text-5xl" />,
            title: 'Modern Bathroom',
            desc: `Enjoy your world as you like`
        },
        {
            icon: <MdWifi className="text-5xl" />,
            title: 'Free  Wifi',
            desc: `Enjoy your world as you like`
        },
        {
            icon: <BiSwim className="text-5xl" />,
            title: 'Swimmin Pool Access',
            desc: `Full day time access`
        },
        {
            icon: <MdCommute className="text-5xl" />,
            title: 'Free Local Commute',
            desc: `With LED TV's & Sofas`
        },
    ]

    const ourFacilities = facilities.map((ele, index) => {
        return (
            <span key={index} className='flex items-start justify-start gap-x-3 w-full'>
                {ele.icon}
                <span className='flex flex-col items-start justify-center w-full text-left'>
                    <h3 className='text-md font-semibold capitalize tracking-wider sm:text-lg'>{ele.title}</h3>
                    <span className='text-xs text-black font-normal'>{ele.desc}</span>
                </span>
            </span>
        )
    })

    const specifications = data.map((ele, index) => {
        return (
            <span key={index} className='flex flex-col items-start justify-center text-left'>
                <span className='flex items-center justify-center gap-x-2 text-green-700'>
                    <GiDiamonds className='text-xs' />
                    <span className='text-sm font-semibold'>{ele.title}</span>
                </span>
                <span className='flex items-center justify-center w-full text-left text-xs h-full px-5 py-3.5 my-2 border-l-2 border-green-500 ml-1.5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quisquam voluptate ex tempore soluta ipsam consequuntur doloribus sit illum. Ullam!
                </span>
            </span>
        )
    })
    return (
        <div className='flex flex-col items-center justify-center w-full gap-y-16'>
            <span className='flex flex-col items-center justify-center w-full gap-y-2'>
                <span className='flex font-sans text-black items-center justify-start gap-x-1.5 w-full'>
                    <h1 className='text-lg text-green-700 font-semibold'>{hotel_details.hotel_name}</h1>
                    <h3 className='text-xs text-green-700'>{hotel_details.city}, {hotel_details.state}, {hotel_details.country}</h3>
                </span>

                <span className='flex font-sans text-xs text-green-700 items-center justify-start gap-x-1.5 w-full'>
                    from 199/night &nbsp; <MdStars className='text-yellow-500 text-lg' /> {hotel_details.star_rating}/5
                </span>

                <span className='flex font-sans text-xs text-green-700 items-center justify-between gap-x-1.5 w-full'>
                    <span className='flex items-center justify-center text-left'>
                        <MdLocationOn className='text-xl cursor-pointer text-blue-400 mr-1' /> {hotel_details.addressline1}
                    </span>
                    <span className='flex items-center text-md justify-center'>
                        <BsHeart className='text-lg mr-1.5 cursor-pointer' /> 16 &nbsp; <BsShare className='text-lg ml-2.5 cursor-pointer' />
                    </span>
                </span>
            </span>

            <span className='text-left text-xs font-normal flex flex-col items-start justify-center w-full gap-y-5'>
                <span className=' text-justify'>
                    {hotel_details.overview}
                </span>
                {/* <span className='text-justify'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem animi, nemo quibusdam quod laudantium quas blanditiis ipsam non provident qui. Corporis officiis maiores soluta, harum excepturi vero atque, dolores pariatur nihil repellendus delectus voluptate nam optio possimus eum! Perspiciatis, itaque.
                </span> */}
            </span>

            <span className='flex flex-col items-start justify-center w-full gap-y-5'>
                {specifications}
            </span>

            <span className='flex flex-col items-start justify-center w-full gap-y-12 text-green-700'>
                <h2 className='text-xl font-semibold sm:text-2xl'>Our Facilities</h2>
                <span className='grid grid-cols-1 place-items-start w-full gap-x-2.5 gap-y-10 sm:grid-cols-2'>
                    {ourFacilities}
                </span>
            </span>

            <span className='flex flex-col items-start justify-center w-full gap-y-5 sm:gap-y-10 '>
                <h2 className='text-xl text-green-700 font-semibold sm:text-2xl'>Rating</h2>
                <ShowCaseRating />
            </span>

            <span className='flex flex-col items-start justify-center w-full gap-y-5 sm:gap-y-10 '>
                <h2 className='text-xl text-green-700 font-semibold sm:text-2xl'>Our Reviews</h2>
                <Reviews />
            </span>

        </div>
    )
}

export default Description