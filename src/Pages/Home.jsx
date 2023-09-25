import React from 'react'
import GeneralNavbar from '../Components/Navbar/GeneralNavbar'
import Landing from '../Components/Home/Landing'
import GeneralFooter from '../Components/Footer/GeneralFooter'
import TredingDestination from '../Components/Home/TredingDestination'
import TravelTips from '../Components/Home/TravelTips'
import Trending from '../Components/Home/Trending'

function Home() {
    return (
        <>
            <GeneralNavbar />
            <Landing/>
            <TredingDestination />
            <TravelTips />
            <Trending />
            <GeneralFooter />
        </>
    )
}

export default Home