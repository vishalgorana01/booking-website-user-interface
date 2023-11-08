import React, { useContext, useEffect, useState } from 'react'
import GeneralNavbar from '../Components/Navbar/GeneralNavbar'
import Landing from '../Components/Destination/Landing'
import Hotels from '../Components/Searching/Hotels'
import Properties from '../Components/Destination/Properties'
import GeneralFooter from '../Components/Footer/GeneralFooter'
import Footer from '../Components/Footer/Footer'
import { MyContext } from '../Components/Utilities/MyContext'
import { useSearchParams } from 'react-router-dom'
import { searchData } from '../Components/HardData/HotelsSearchData'


function Destnation() {
    const {accessToken, setAccessToken} = useContext(MyContext);
    const [searchParams] = useSearchParams();
    const destinationName = searchParams.get('destination')
    const destinationId = searchParams.get('countryId')

    const [properties, allProperties] = useState(
        searchData.filter((ele, idx) => {
            return ((destinationName != undefined && destinationId != undefined) 
            ? 
            ele.country == destinationName || ele.country_id == destinationId
            :
            searchData);
        })
    );

    useEffect(() => {

    }, [properties])
    
    return (
        <>
            <GeneralNavbar bgColor='transparent' color='white'/>
            <Landing destination_name = {destinationName != undefined ? destinationName : 'All Hotels'} properties_data = {properties} />
            <Properties destination_name = {destinationName != undefined ? destinationName : 'All Hotels'} properties_data = {properties} accessToken = {accessToken} />
            {/* <GeneralFooter /> */}
            <Footer />
        </>
    )
}

export default Destnation