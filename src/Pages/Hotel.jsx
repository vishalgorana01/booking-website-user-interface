import React from 'react'
import GeneralNavbar from '../Components/Navbar/GeneralNavbar'
import Landing from '../Components/Hotel/Landing'
import HotelDescription from '../Components/Hotel/HotelDescription'
import GeneralFooter from '../Components/Footer/GeneralFooter'
import Footer from '../Components/Footer/Footer'

function Hotel() {
    return (
        <>
            <GeneralNavbar bgColor='transparent' color='white' />
            <Landing />
            <HotelDescription />
            {/* <GeneralFooter /> */}
            <Footer />
        </>
    )
}

export default Hotel