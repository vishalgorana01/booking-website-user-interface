import React from 'react'

// images
import turkey from '../../Assets/Images/Turkey.jpg'
import asutralia from '../../Assets/Images/Australia.jpg'
import france from '../../Assets/Images/France.jpg'
import temple from '../../Assets/Images/Temple.jpg'
import thailand from '../../Assets/Images/Thailand.jpg'
import turkey2 from '../../Assets/Images/Tukey 2.jpg'
import turkey3 from '../../Assets/Images/Turkey 3.jpg'
import unitedstates from '../../Assets/Images/United States.jpg'
import mosque from '../../Assets/Images/mosque.jpg'


function TredingDestination() {
    return (
        <>
            <section className='flex px-6 items-center justify-center pb-6 pt-12 w-screen sm:px-8 lg:px-10 lg:pt-28'>
                <div className='flex flex-col items-center justify-center w-full max-w-7xl'>
                    <h1 className='text-2xl font-semibold font-sans text-black'>Top Destination</h1>
                    <span className=' w-10 border-[#222a3b] border-2 rounded-2xl mt-2.5 border-solid'></span>

                    <span className='grid py-8 max-w-5xl w-full gap-5 grid-cols-1 relative sm:grid-cols-2 lg:grid-cols-4'>
                        <span className='cursor-pointer flex h-48 w-full overflow-hidden items-center justify-center relative sm:h-72'>
                            <img className=' absolute object-cover h-full w-full' src={france} alt="" />
                            <span className='flex p-5 flex-col items-start justify-start absolute top-0 left-0 bg-blend-darken h-full w-full' style={{ background: 'linear-gradient(180deg, black, transparent)' }}>
                                <h3 className='text-gray-200 font-sans font-semibold tracking-wider text-lg'>France</h3>
                                <span className=' w-8 mt-2' style={{border: '1.5px solid white'}}></span>
                            </span> 
                        </span>

                        <span className='cursor-pointer flex h-48 items-center justify-center relative sm:h-72'>
                            <img className='absolute object-cover h-full w-full' src={temple} alt="" />
                            <span className='flex p-5 flex-col items-start justify-start absolute top-0 left-0 bg-blend-darken h-full w-full' style={{ background: 'linear-gradient(180deg, black, transparent)' }}>
                                <h3 className='text-gray-200 font-sans font-semibold tracking-wider text-lg'>Thailand</h3>
                                <span className=' w-8 mt-2' style={{border: '1.5px solid white'}}></span>
                            </span> 
                        </span>

                        <span className='cursor-pointer flex h-48 col-span-1 items-center justify-center relative sm:col-span-2 sm:h-72'>
                            <img className='absolute object-cover h-full w-full' src={asutralia} alt="" />
                            <span className='flex p-5 flex-col items-start justify-start absolute top-0 left-0 bg-blend-darken h-full w-full' style={{ background: 'linear-gradient(180deg, black, transparent)' }}>
                                <h3 className='text-gray-200 font-sans font-semibold tracking-wider text-lg'>United Kingdom</h3>
                                <span className=' w-8 mt-2' style={{border: '1.5px solid white'}}></span>
                            </span> 
                        </span>

                        <span className='cursor-pointer flex h-48 items-center justify-center relative sm:h-72'>
                            <img className='absolute object-cover h-full w-full' src={asutralia} alt="" />
                            <span className='flex p-5 flex-col items-start justify-start absolute top-0 left-0 bg-blend-darken h-full w-full' style={{ background: 'linear-gradient(180deg, black, transparent)' }}>
                                <h3 className='text-gray-200 font-sans font-semibold tracking-wider text-lg'>Australia</h3>
                                <span className=' w-8 mt-2' style={{border: '1.5px solid white'}}></span>
                            </span> 
                        </span>

                        <span className='cursor-pointer flex h-48 items-center justify-center relative sm:h-72'>
                            <img className='absolute object-cover h-full w-full' src={mosque} alt="" />
                            <span className='flex p-5 flex-col items-start justify-start absolute top-0 left-0 bg-blend-darken h-full w-full' style={{ background: 'linear-gradient(180deg, black, transparent)' }}>
                                <h3 className='text-gray-200 font-sans font-semibold tracking-wider text-lg'>United States</h3>
                                <span className=' w-8 mt-2' style={{border: '1.5px solid white'}}></span>
                            </span> 
                        </span>

                        <span className='cursor-pointer flex h-48 col-span-1 items-center justify-center relative sm:col-span-2 sm:h-72'>
                            <img className='absolute object-cover h-full w-full' src={turkey3} alt="" />
                            <span className='flex p-5 flex-col items-start justify-start absolute top-0 left-0 bg-blend-darken h-full w-full' style={{ background: 'linear-gradient(180deg, black, transparent)' }}>
                                <h3 className='text-gray-200 font-sans font-semibold tracking-wider text-lg'>Turkey</h3>
                                <span className=' w-8 mt-2' style={{border: '1.5px solid white'}}></span>
                            </span> 
                        </span>
                    </span>
                </div>
            </section>
        </>
    )
}

export default TredingDestination