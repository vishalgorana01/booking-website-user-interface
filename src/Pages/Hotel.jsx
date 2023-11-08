import React from 'react'
import GeneralNavbar from '../Components/Navbar/GeneralNavbar'
import Landing from '../Components/Hotel/Landing'
import HotelDescription from '../Components/Hotel/HotelDescription'
import GeneralFooter from '../Components/Footer/GeneralFooter'
import Footer from '../Components/Footer/Footer'
import { searchData } from '../Components/HardData/HotelsSearchData'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function Hotel() {
    const [searchParams] = useSearchParams();
    const hotelName = searchParams.get('hotel')
    const hotelId = searchParams.get('id')

    const [hotel, setHotel] = useState(
        searchData.filter((ele, idx) => {
            return (ele.hotel_id == hotelId);
        })
    );

    useEffect(() => {

    }, [hotel])

    return (
        <>
            <GeneralNavbar bgColor='transparent' color='white' />
            <Landing hotel_details = {hotel[0]} />
            <HotelDescription hotel_details = {hotel[0]} />
            {/* <GeneralFooter /> */}
            <Footer />
        </>
    )
}

export default Hotel