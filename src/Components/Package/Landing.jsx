import React from 'react'

// Global css
import '../../Assets/CSS/Global.css'

// images
import france from '../../Assets/Images/France.jpg'

// react-icons
import { IoIosArrowForward } from 'react-icons/io'

function Landing() {
  return (
    <>
      <section className='DestinationLandingBg relative text-gray-200 flex flex-col items-center justify-center h-[24rem] w-screen px-8 lg:px-12 ' style={{ backgroundImage: `url(${france})` }}>
        <div className="flex flex-col items-start gap-y-5 font-sans justify-between h-full w-full pt-24 pb-10 max-w-5xl" >
          <span className='flex flex-col items-start gap-y-0.5 font-sans justify-center'>
            <h1 className='text-md tracking-wider font-semibold md:text-xl'>Hotel Details</h1>
            <span className='flex items-center justify-start text-xs gap-x-0.5 md:text-sm'>
              <h3 className='font-semibold'>Home</h3>
              <IoIosArrowForward className='text-md mt-0.5 md:text-lg md:mt-1' />
              <h3 className='font-semibold'>Hotel</h3>
            </span>
          </span>

          <span className='flex flex-col items-start gap-y-0.5 font-sans justify-center'>
            <h1 className='text-xl tracking-wider font-semibold text-left md:text-3xl'>The Carlton Hotel</h1>
          </span>
        </div>
      </section>
    </>
  )
}

export default Landing