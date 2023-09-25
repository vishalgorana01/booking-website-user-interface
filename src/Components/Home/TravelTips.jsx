import React from 'react'

// Global CSS
import '../../Assets/CSS/Global.css'

function TravelTips() {
  return (
    <>
    <section className='TravelTipsBg flex items-center justify-center w-screen py-12 px-6 sm:px-8 lg:px-10'>
        <div className='flex items-center flex-col text-gray-300 justify-center w-full gap-y-5 max-w-7xl lg:py-10'>
            <h1 className='text-2xl font-semibold font-sans tracking-wider md:text-3xl'>Travel Tips</h1>
            <span className='text-xs text-center italic max-w-md lg:text-md lg:max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni tenetur, vel dolore perspiciatis ipsum nisi, quibusdam vitae pariatur velit veritatis accusantium tempore rerum</span>
            <button className='flex items-center justify-center px-7 py-1.5 rounded-md border-s-gray-300 border-2 cursor-pointer hover:bg-gray-300 hover:text-[#060606]'>Get Started</button>
        </div>
    </section>
    </>
  )
}

export default TravelTips