import React from 'react'
import GeneralNavbar from '../Components/Navbar/GeneralNavbar'
import Landing from '../Components/Destination/Landing'
import Hotels from '../Components/Searching/Hotels'
import Properties from '../Components/Destination/Properties'
import GeneralFooter from '../Components/Footer/GeneralFooter'
import Footer from '../Components/Footer/Footer'


function Destnation() {
    return (
        <>
            <GeneralNavbar bgColor='transparent' color='white'/>
            <Landing />
            <Properties />
            {/* <GeneralFooter /> */}
            <Footer />
        </>
    )
}

export default Destnation