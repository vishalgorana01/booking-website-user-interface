import React from 'react'

// react icons
import { BiArea, BiBed } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { PiBathtubBold, PiTelevisionBold } from 'react-icons/pi'
import { GiWashingMachine, GiTowel, GiSlippers, GiDiamonds } from 'react-icons/gi'
import { TbAirConditioning } from 'react-icons/tb'
import {FaWifi} from 'react-icons/fa'
import {BiSolidDryer} from 'react-icons/bi'
import {AiOutlineMedicineBox} from 'react-icons/ai'
import {MdPets} from 'react-icons/md'
import {CgSmartHomeRefrigerator} from 'react-icons/cg'

function Description() {
  const familyFriendlyAmenities = [
    {
      icon: <GiWashingMachine className='text-2xl mr-1.5' />,
      label: 'Washing Machine'
    },
    {
      icon: <GiWashingMachine className='text-2xl mr-1.5' />,
      label: 'Washing Machine'
    },
    {
      icon: <GiWashingMachine className='text-2xl mr-1.5' />,
      label: 'Washing Machine'
    },
  ]

  const RoomAmenities = [
    {
      icon: <TbAirConditioning className='text-2xl mr-1.5' />,
      label: 'Air Conditioner'
    },
    {
      icon: <PiTelevisionBold className='text-2xl mr-1.5' />,
      label: 'Cable TV'
    },
    {
      icon: <FaWifi className='text-2xl mr-1.5' />,
      label: 'Wifi & Internet'
    },
    {
      icon: <GiTowel className='text-2xl mr-1.5' />,
      label: 'Towels'
    },
    {
      icon: <GiSlippers className='text-2xl mr-1.5' />,
      label: 'Slippers'
    },
    {
      icon: <MdPets className='text-2xl mr-1.5' />,
      label: 'Pet-friendly'
    },
    {
      icon: <BiSolidDryer className='text-2xl mr-1.5' />,
      label: 'Hair dryer'
    },
    {
      icon: <AiOutlineMedicineBox className='text-2xl mr-1.5' />,
      label: 'Medical facilities'
    },
    {
      icon: <GiSlippers className='text-2xl mr-1.5' />,
      label: 'Slippers'
    },
    {
      icon: <CgSmartHomeRefrigerator className='text-2xl mr-1.5' />,
      label: 'Refrigerator'
    }

  ]

  const suiteAvailabilities = [
    'Private balcony',
    '140x200 cm Elite bed',
    'Upholstered seat beside the panoramic window',
    'TV-UHD screen for watching mountaineering films',
    'Writind desk with USB ports for documenting your adventures',
    'Room safe for your top mountain photos',
    'Service station with Lavaza coffee machine, kettle and tea',
    'Bathroom with rain shower',
    'Comfortable terry towels and bathrobes',
  ]
  return (
    <div className='flex flex-col items-center justify-center w-full px-3.5 py-5 gap-y-16 max-w-[50rem]'>
      <span className='flex flex-col items-start justify-center w-full gap-y-5'>
        <h1 className='text-2xl text-green-700 font-semibold text-left'>Studio With Balcony</h1>
        <span className='text-xs font-semibold'>456 sq.ft / 42 sq.metre / Park view / 2 Guests</span>
        <span className='flex items-center justify-start gap-x-10 gap-y-3.5 w-full flex-wrap'>
          <span className='flex items-center text-sm justify-start'><BiArea className='text-2xl text-green-600 mr-1' />456 sq.ft</span>
          <span className='flex items-center text-sm justify-start'><FiUsers className='text-2xl text-green-600 mr-1' />2 Guests</span>
          <span className='flex items-center text-sm justify-start'><BiBed className='text-2xl text-green-600 mr-1' />1 Bed</span>
          <span className='flex items-center text-sm justify-start'><PiBathtubBold className='text-2xl text-green-600 mr-1' />1 Bathroom</span>
        </span>
      </span>

      <span className='flex flex-col items-start justify-center gap-y-5'>
        <span className='text-left text-xs w-full sm:text-sm'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio porro necessitatibus officia. Sequi debitis fugiat iusto assumenda veniam quas nesciunt sint itaque libero, iure aliquid ratione, vel ab placeat eaque in non labore suscipit! Magni voluptatem quibusdam possimus unde Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aspernatur?
        </span>

        <span className='text-left text-xs w-full sm:text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nostrum porro maxime quisquam doloremque, deleniti dolore, sequi architecto asperiores, ratione nisi quaerat animi veniam voluptas facilis unde voluptate eum! Cum.
        </span>
      </span>

      <span className='flex flex-col items-start justify-center gap-y-5 w-full'>
        <h1 className='text-xl text-green-700 font-semibold text-left'>Family-friendly Amenities</h1>
        <span className='flex items-center justify-start flex-wrap w-full gap-x-10 gap-y-3.5'>
          {
            familyFriendlyAmenities.map((ele, index) => {
              return (
                <span key={index} className='flex items-center justify-center text-sm rounded-sm bg-green-300 py-3.5 px-3'>
                  {ele.icon}
                  {ele.label}
                </span>
              )
            })
          }
        </span>
      </span>

      <span className='flex flex-col items-start justify-center gap-y-5 w-full'>
        <h1 className='text-xl text-green-700 font-semibold text-left'>Room Amenities</h1>
        <span className='grid grid-cols-2 place-items-start gap-y-4 w-full'>
          {
            RoomAmenities.map((ele, index) => {
              return (
                <span key={index} className='flex items-center text-xs text-left justify-start w-full sm:text-sm'>
                  {ele.icon}
                  {ele.label}
                </span>
              )
            })
          }
        </span>
      </span>

      <span className='flex flex-col items-start justify-center gap-y-5 w-full'>
        <h1 className='text-xl text-green-700 font-semibold text-left'>What's include in this suite</h1>
        <span className='flex flex-col items-start justify-center gap-y-4 w-full'>
          {
            suiteAvailabilities.map((ele, index) => {
              return (
                <span key={index} className='flex text-left items-start text-xs justify-start w-full sm:text-sm'>
                  <GiDiamonds className='text-xs mt-1.5 mr-1.5' />
                  {ele}
                </span>
              )
            })
          }
        </span>
      </span>

    </div>
  )
}

export default Description