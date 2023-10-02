import React from 'react'
import GeneralNavbar from '../Components/Navbar/GeneralNavbar'
import GeneralFooter from '../Components/Footer/GeneralFooter'
import Properties from '../Components/Rooms/Properties'

export default function Rooms() {
    return (
        <>
            <GeneralNavbar bgColor='transparent' color='#22c55e' />
            <Properties />
            <GeneralFooter />
        </>
    )
}
