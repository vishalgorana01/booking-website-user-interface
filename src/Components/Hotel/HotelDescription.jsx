import React from 'react'
import CheckAvailability from '../Sidebar/CheckAvailability'
import ReactCarousel from '../Utilities/ReactCarousel'
import Description from './Description'
import ShowCase from '../Sidebar/ShowCase'

function HotelDescription() {
    const hotelImages = [
        {src: 'https://img.freepik.com/free-photo/umbrella-chair_74190-3726.jpg?size=626&ext=jpg&uid=R73260634&ga=GA1.2.68261860.1688198679&semt=ais'},
        {src: 'https://img.freepik.com/free-photo/chair-nobody-summer-lifestyle-terrace_1203-4897.jpg?size=626&ext=jpg&uid=R73260634&ga=GA1.2.68261860.1688198679&semt=ais'},
        {src: 'https://img.freepik.com/free-photo/outdoor-balcony_74190-1314.jpg?size=626&ext=jpg&uid=R73260634&ga=GA1.2.68261860.1688198679&semt=ais'},
        {src: 'https://img.freepik.com/free-photo/beach-sochi_181624-528.jpg?size=626&ext=jpg&uid=R73260634&ga=GA1.2.68261860.1688198679&semt=ais'},
        {src: 'https://img.freepik.com/free-photo/terrace-hotel-stuffed-with-soft-furnitures-green-space_114579-2724.jpg?size=626&ext=jpg&uid=R73260634&ga=GA1.2.68261860.1688198679&semt=ais'},
        {src: 'https://img.freepik.com/free-photo/hammocks-near-pool_1203-693.jpg?size=626&ext=jpg&uid=R73260634&ga=GA1.2.68261860.1688198679&semt=ais'},
        {src: 'https://img.freepik.com/free-photo/summer-restaurant-mediterranean-coast-beautiful-sunset-tekirova-kemer-turkey_146671-18739.jpg?size=626&ext=jpg&uid=R73260634&ga=GA1.2.68261860.1688198679&semt=ais'},
        {src: 'https://img.freepik.com/free-photo/street-restaurant-old-town-regensburg-germany_1127-3371.jpg?size=626&ext=jpg&uid=R73260634&ga=GA1.2.68261860.1688198679&semt=ais'},
        {src: 'https://img.freepik.com/free-photo/terrace-restaurand-modern-style-summer_114579-2726.jpg?size=626&ext=jpg&uid=R73260634&ga=GA1.2.68261860.1688198679&semt=ais'},
    ]
  return (
    <>
    <section className='flex items-center justify-center w-screen px-3 lg:px-12 '>
        <div className="flex flex-col gap-y-5 items-start font-sans justify-between py-12  w-full max-w-4xl" >

          <span className='flex flex-col items-start font-sans gap-x-3.5 gap-y-12 justify-between w-full lg:flex-row'>
            <CheckAvailability titleName='Search Rooms' />
            <ReactCarousel images={hotelImages} />
          </span>

          <span className='flex flex-col-reverse items-start font-sans gap-x-3.5 gap-y-12 justify-between w-full lg:flex-row'>
            <ShowCase />
            <Description />
          </span>

        </div>
      </section>
    </>
  )
}

export default HotelDescription