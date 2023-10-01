import React from 'react'
import GeneralFooter from '../Components/Footer/GeneralFooter'
import GeneralNavbar from '../Components/Navbar/GeneralNavbar'
import Landing from '../Components/Package/Landing'
import PackageDescription from '../Components/Package/PackageDescription'

export default function Package() {
    return (
        <>
            <GeneralNavbar bgColor='transparent' color='white' />
            <Landing />
            <PackageDescription />
            <GeneralFooter />
        </>
    )
}
