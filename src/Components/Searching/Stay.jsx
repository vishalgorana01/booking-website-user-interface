import React, { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";

// react icons
import { ImLocation2 } from 'react-icons/im'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { HiUsers } from 'react-icons/hi'
import { MdArrowDropDown } from 'react-icons/md'
import { RxCrossCircled } from 'react-icons/rx'

function Stay(props) {
  const { setSearchingComponent, setBackScreen } = props;

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  }

  const [theme, setTheme] = useState("blue");

  const [noRomms, setNoRooms] = useState(1)

  const increaseRoomNumber = (value) => {
    if (value <= 10) {
      setNoRooms(value)
    }
  }

  const decreaseRoomNumber = (value) => {
    if (value >= 1) {
      setNoRooms(value)
    }
  }

  const [noGuests, setNoGuests] = useState(1)

  const increaseGuestsNumber = (value) => {
    if (value <= 10) {
      setNoGuests(value)
    }
  }

  const decreaseGuestsNumber = (value) => {
    if (value >= 1) {
      setNoGuests(value)
    }
  }

  // handle props
  const handleProps = () => {
    setSearchingComponent(null);
    setBackScreen(false)
  }

  return (
    <>
      <div className="fixed z-[2] items-center bg-white max-w-5xl px-3 py-6 rounded-md justify-center shadow-2xl lg:relative lg:top-0">
        {/* triangle */}
        <span className='hidden absolute left-[23rem] bg-white -top-2.5 h-5 w-5 lg:inline-block' style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></span>

        {/* cross */}
        <span className='cursor-pointer inline-block absolute top-5 right-5 text-red-600 text-2xl font-bold lg:hidden' onClick={() => handleProps()}><RxCrossCircled /></span>

        <span className='grid grid-cols-1 px-8 gap-y-10 items-start justify-center lg:grid-cols-4'>
          <span className='flex items-start gap-y-2 justify-center flex-col'>
            <h6 className=' font-semibold text-gray-600 text-md lg:text-sm'>Destination what you want</h6>
            <label className='flex items-center gap-x-1 justify-center' htmlFor="">
              <ImLocation2 className='text-blue-600 text-lg' />
              <input type="text" className='text-md text-black outline-none' placeholder='where you going?' style={{ border: 'none' }} />
            </label>
          </span>

          <span className='flex flex-col gap-y-2 items-start justify-center lg:items-center'>
            <h6 className=' font-semibold text-gray-600 text-md lg:text-sm'>CheckIn - CheckOut</h6>
            <label className='flex rounded-md items-center gap-x-1 justify-start lg:px-2' htmlFor="">
              <BsFillCalendarDateFill className='text-blue-600 text-xl' />
              <Datepicker
                primaryColor={theme}
                value={value}
                onChange={handleValueChange}
                showShortcuts={true}
              />
            </label>
          </span>

          <span className='flex flex-col gap-y-2 items-start justify-center lg:items-center'>
            <h6 className=' font-semibold text-gray-600 text-md lg:text-sm'>Rooms & Guests</h6>
            <span className='flex items-center justify-center'>
              <label className='flex rounded-md items-center gap-x-2.5 justify-start lg:px-2' htmlFor="">
                <HiUsers className='text-blue-600 text-xl' />
                <span className='text-black mr-1 font-semibold'>
                  <MdArrowDropDown className='cursor-pointer rotate-180' onClick={() => decreaseRoomNumber(noRomms - 1)} />
                  {noRomms} Rooms
                  <MdArrowDropDown className='cursor-pointer' onClick={() => increaseRoomNumber(noRomms + 1)} />
                </span>
                <span className='text-black ml-1 font-semibold'>
                  <MdArrowDropDown className='cursor-pointer rotate-180' onClick={() => decreaseGuestsNumber(noGuests - 1)} />
                  {noGuests} Guests
                  <MdArrowDropDown className='cursor-pointer' onClick={() => increaseGuestsNumber(noGuests + 1)} />
                </span>
              </label>
            </span>
          </span>

          <span className='flex items-center justify-start lg:justify-end lg:place-self-center'>
            <button className='text-white cursor-pointer font-semibold text-lg bg-blue-600 px-8 py-2 rounded-md hover:bg-blue-500'>search</button>
          </span>
        </span>
      </div>
    </>
  )
}

export default Stay