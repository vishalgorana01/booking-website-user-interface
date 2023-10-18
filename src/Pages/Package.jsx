import React from 'react'
import GeneralFooter from '../Components/Footer/GeneralFooter'
import GeneralNavbar from '../Components/Navbar/GeneralNavbar'
import Landing from '../Components/Package/Landing'
import PackageDescription from '../Components/Package/PackageDescription'
import Footer from '../Components/Footer/Footer'

export default function Package() {
    return (
        <>
            <GeneralNavbar bgColor='transparent' color='white' />
            <Landing />
            <PackageDescription />
            {/* <GeneralFooter /> */}
            <Footer />
        </>
    )
}
