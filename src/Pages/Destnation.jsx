import React from 'react'
import GeneralNavbar from '../Components/Navbar/GeneralNavbar'
import Landing from '../Components/Destination/Landing'
import Hotels from '../Components/Searching/Hotels'
import Properties from '../Components/Destination/Properties'
import GeneralFooter from '../Components/Footer/GeneralFooter'


function Destnation() {
    return (
        <>
            <GeneralNavbar bgColor='transparent' color='white'/>
            <Landing />
            <Properties />
            <GeneralFooter />
        </>
    )
}

export default Destnation