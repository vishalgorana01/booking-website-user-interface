import React from 'react'
import GeneralNavbar from '../Components/Navbar/GeneralNavbar'
import GeneralFooter from '../Components/Footer/GeneralFooter'
import RoomDescription from '../Components/Rooms/RoomDescription'
import Footer from '../Components/Footer/Footer'

function Room() {
  return (
    <>
    <GeneralNavbar bgColor='transparent' color='#22c55e'  />
    <RoomDescription />
    {/* <GeneralFooter /> */}
    <Footer />
    </>
  )
}

export default Room