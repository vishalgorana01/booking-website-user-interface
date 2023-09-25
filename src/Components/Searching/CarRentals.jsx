import React, { useState } from 'react'

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// react icons
import { ImLocation2 } from 'react-icons/im'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { HiUsers } from 'react-icons/hi'
import { MdArrowDropDown } from 'react-icons/md'
import { RxCrossCircled } from 'react-icons/rx'
import {AiFillCar} from 'react-icons/ai'

function CarRentals(props) {
  const { setSearchingComponent, setBackScreen } = props;

  const [number, setNumber] = useState(1)
  const [carName, setCarName] = useState('car1')

  const increase = (value) => {
    if (value <= 5) {
      if (value == 1) {
        setCarName('car1')
      }
      else if (value == 2) {
        setCarName('car2')
      }
      else if (value == 3) {
        setCarName('car3')
      }
      else if (value == 4) {
        setCarName('car4')
      }
      else if (value == 5) {
        setCarName('car5')
      }

      setNumber(value)
    }
  }

  const decrease = (value) => {
    if (value >= 1) {
      if (value == 1) {
        setCarName('car1')
      }
      else if (value == 2) {
        setCarName('car2')
      }
      else if (value == 3) {
        setCarName('car3')
      }
      else if (value == 4) {
        setCarName('car4')
      }
      else if (value == 5) {
        setCarName('car5')
      }

      setNumber(value)
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
            <span className='hidden absolute left-[37rem] bg-white -top-2.5 h-5 w-5 lg:inline-block' style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></span>

            {/* cross */}
            <span className='cursor-pointer inline-block absolute top-5 right-5 text-red-600 text-2xl font-bold lg:hidden' onClick={() => handleProps()}><RxCrossCircled /></span>

            <span className='grid grid-cols-1 gap-y-10 gap-x-3 w-full px-5 items-start justify-center lg:grid-cols-5'>
              <span className='flex items-start gap-y-2 justify-center flex-col'>
                <h6 className=' font-semibold text-gray-600 text-md lg:text-sm'>Location :</h6>
                <label className='flex items-center gap-x-1 justify-center' htmlFor="">
                  <ImLocation2 className='text-blue-600 text-lg' />
                  <input type="text" className='text-md text-black outline-none' placeholder='From where?' />
                </label>
              </span>

              <span className='flex items-start gap-y-2 justify-center flex-col'>
                <h6 className=' font-semibold text-gray-600 text-md lg:text-sm'>Pick-up date & time</h6>
                <span className='flex gap-x-1.5 items-center justify-center'>
                  <DatePicker label="pick-up date" />
                  <TimePicker label="pick up time" />
                </span>
              </span>

              <span className='flex items-start gap-y-2 justify-center flex-col'>
                <h6 className=' font-semibold text-gray-600 text-md lg:text-sm'>Return date & time</h6>
                <span className='flex gap-x-1.5 items-center justify-center'>
                  <DatePicker label="return date" />
                  <TimePicker label="return time" />
                </span>
              </span>

              <span className='flex flex-col gap-y-2 items-start justify-center lg:items-center'>
                <h6 className=' font-semibold text-gray-600 text-md lg:text-sm'>Name of Cars</h6>
                <span className='flex items-center justify-center'>
                  <label className='flex rounded-md px-2 items-center gap-x-2.5 justify-start' htmlFor="">
                    <AiFillCar className='text-blue-600 text-xl' />
                    <span className='text-black mr-1 font-semibold'>
                      <MdArrowDropDown className='cursor-pointer rotate-180' onClick={() => decrease(number - 1)} />
                      {carName}
                      <MdArrowDropDown className='cursor-pointer' onClick={() => increase(number + 1)} />
                    </span>
                  </label>
                </span>
              </span>

              <span className='flex items-center justify-start lg:justify-end lg:place-self-center'>
                <button className='text-white cursor-pointer font-semibold text-lg bg-blue-600 px-8 py-2 rounded-md hover:bg-blue-500'>Find Car</button>
              </span>
            </span>
          </div>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  )
}

export default CarRentals