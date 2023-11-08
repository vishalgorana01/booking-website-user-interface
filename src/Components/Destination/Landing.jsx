import React from 'react'

// CSS
import '../../Assets/CSS/Global.css'

// Images
import france from '../../Assets/Images/France.jpg'
import Hotels from '../Searching/Hotels'

function Landing(props) {
  const {destination_name} = props;

  return (
    <>
      <section className='DestinationLandingBg relative text-gray-200 flex flex-col items-center justify-center h-[28rem] w-screen px-8 lg:px-12' style={{ backgroundImage: `url(${france})` }}>
        <div className="flex flex-col items-start gap-y-5 font-sans justify-center h-full w-full max-w-7xl" >
          <span className='flex flex-col items-start gap-y-0.5 font-sans justify-center'>
            <h1 className='text-3xl font-semibold'>{destination_name}</h1>
            {/* <h1 className='text-3xl font-semibold'>Russia</h1> */}
          </span>
          <h3 className='text-xs italic font-normal text-left lg:text-sm'>A Journey Through History, Culture, and Architecture</h3>
        </div>
      </section>
      {/* <Hotels /> */}
    </>
  )
}

export default Landing