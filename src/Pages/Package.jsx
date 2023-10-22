import React from 'react'
import GeneralFooter from '../Components/Footer/GeneralFooter'
import GeneralNavbar from '../Components/Navbar/GeneralNavbar'
import Landing from '../Components/Package/Landing'
import PackageDescription from '../Components/Package/PackageDescription'
import Footer from '../Components/Footer/Footer'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { vacations_Data } from '../Components/HardData/Vacations'

export default function Package() {
    const [searchParams] = useSearchParams();
    const packageName = searchParams.get('package')
    console.log(packageName)
    const packageId = searchParams.get('id')
    console.log(packageId)

    const [vacation, setVacation] = useState(
        vacations_Data.filter((ele, idx) => {
            return (ele.id == packageId);
        })
    );

    useEffect(() => {

    }, [vacation])
    return (
        <>
            <GeneralNavbar bgColor='transparent' color='white' />
            <Landing package_details= {vacation[0]} />
            <PackageDescription package_details= {vacation[0]} />
            {/* <GeneralFooter /> */}
            <Footer />
        </>
    )
}
