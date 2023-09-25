import React, { useState } from 'react'

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// react icons
import { ImLocation2 } from 'react-icons/im'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { HiUsers } from 'react-icons/hi'
import { MdArrowDropDown } from 'react-icons/md'
import { RxCrossCircled } from 'react-icons/rx'

function Flights(props) {
  const { setSearchingComponent, setBackScreen } = props;

  const [noPersons, setNoPersons] = useState(1)

  const increasePersons = (value) => {
    if (value <= 10) {
      setNoPersons(value)
    }
  }

  const decreasePersons = (value) => {
    if (value >= 1) {
      setNoPersons(value)
    }
  }

  // handle props
  const handleProps = () => {
    setSearchingComponent(null);
    setBackScreen(false)
  }

  return (
    <div className='fixed z-[2] shadow-2xl lg:relative'>


      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <div className="flex relative w-full items-center bg-white max-w-5xl px-8 py-6 rounded-md justify-center shadow-2xl" style={{ boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25) !important' }}>
            {/* triangle */}
            <span className='hidden absolute bg-white -top-2.5 h-5 w-5 lg:inline-block' style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></span>

            {/* cross */}
            <span className='cursor-pointer inline-block absolute top-5 right-5 text-red-600 text-2xl font-bold lg:hidden' onClick={() => handleProps()}><RxCrossCircled /></span>

            <span className='grid grid-cols-1 gap-y-10 w-full px-5 items-start justify-center lg:grid-cols-5'>
              <span className='flex items-start gap-y-2 justify-center flex-col'>
                <h6 className=' font-semibold text-gray-600 text-md lg:text-sm'>Leaving from :</h6>
                <label className='flex items-center gap-x-1 justify-center' htmlFor="">
                  <ImLocation2 className='text-blue-600 text-lg' />
                  <input type="text" className='text-md text-black outline-none' placeholder='From where?' />
                </label>
              </span>

              <span className='flex items-start gap-y-2 justify-center flex-col'>
                <h6 className=' font-semibold text-gray-600 text-md lg:text-sm'>Going to :</h6>
                <label className='flex items-center gap-x-1 justify-center' htmlFor="">
                  <ImLocation2 className='text-blue-600 text-lg' />
                  <input type="text" className='text-md text-black outline-none' placeholder='where you going?' />
                </label>
              </span>

              <span className='flex items-start gap-y-2 justify-center flex-col'>
                <h6 className=' font-semibold text-gray-600 text-md lg:text-sm'>Arriving date</h6>
                <DatePicker label="Date of arriving" />
              </span>

              <span className='flex flex-col gap-y-2 items-start justify-center lg:items-center'>
                <h6 className=' font-semibold text-gray-600 text-md lg:text-sm'>Travellers</h6>
                <span className='flex items-center justify-center'>
                  <label className='flex rounded-md px-2 items-center gap-x-2.5 justify-start' htmlFor="">
                    <HiUsers className='text-blue-600 text-xl' />
                    <span className='text-black mr-1 font-semibold'>
                      <MdArrowDropDown className='cursor-pointer rotate-180' onClick={() => decreasePersons(noPersons - 1)} />
                      {noPersons} &nbsp; Persons
                      <MdArrowDropDown className='cursor-pointer' onClick={() => increasePersons(noPersons + 1)} />
                    </span>
                  </label>
                </span>
              </span>

              <span className='flex items-center justify-start lg:justify-end lg:place-self-center'>
                <button className='text-white cursor-pointer font-semibold text-lg bg-blue-600 px-8 py-2 rounded-md hover:bg-blue-500'>search</button>
              </span>
            </span>
          </div>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  )
}

export default Flights