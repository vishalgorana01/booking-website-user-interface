import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

import turkey from '../../Assets/Images/Temple.jpg'

// react-icons
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

function ReactCarousel({ images }) {
    return (
        <div className='w-full h-[16rem] overflow-y-hidden relative sm:h-[18rem] md:h-[22rem] lg:h-[24rem]'>
            <Carousel autoPlay={true} showArrows={true} thumbWidth='1rem'>
                {images.map((ele, index) => {
                    return (
                        <div className='h-full' key={index}>
                            <img className=' object-cover object-center h-full' src={ele.src} />
                            <p className="legend">Legend {index + 1}</p>
                        </div>
                    )
                })}
            </Carousel>
            <span className='absolute flex items-center justify-center cursor-pointer left-0 top-0 h-full w-7 text-white bg-[#00000047]'>
                <MdArrowBackIos className='text-xl opacity-80 ml-1' />
            </span>
            <span className='absolute flex items-center justify-center cursor-pointer right-0 top-0 h-full w-7 text-white bg-[#00000047]'>
                <MdArrowForwardIos className='text-xl opacity-80 mr-0.5' />
            </span>
        </div>
    )
}

export default ReactCarousel