import React, { useEffect, useState } from 'react'
import Filter from '../Sidebar/Filter'
import UnderLine from '../Utilities/UnderLine'
import CustomDropdown from '../Utilities/CustomDropdowm'
import PropertiesCard from '../Cards/PropertiesCard'
import { propertiesData as data } from '../HardData/PropertiesData'

// react-icons
import { BsFilterLeft } from 'react-icons/bs'
import axios from 'axios'

function Properties(props) {
  //   const {accessToken} = props;
  //   console.log(" -> ",accessToken)

  const { destination_name, properties_data } = props;

  const [translate, setTranslate] = useState(false)

  //   const fetchCheckinLinks = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://test.api.amadeus.com/v2/reference-data/locations/hotels/by-city?city=london",
  //         {
  //           method: 'GET',
  //           mode: 'cors',
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },

  //         }
  //       );

  //       console.log(response)

  //       if (response.ok) {
  //         const result = await response.json();
  //         console.log(result);
  //       } else {
  //         console.log('Failed to fetch data');
  //       }
  //     } catch (error) {
  //       console.log('An error occurred while fetching data.');
  //     }
  //   };

  const sortByOptions = [
    { label: 'sort by', value: 'sort by' },
    { label: 'Name', value: 'Name' },
    { label: 'Low to High', value: 'Low to High' },
    { label: 'High to Low', value: 'High to Low' },
    { label: 'Recommendations', value: 'Recommendations' },
    { label: 'Default', value: 'Default' },
  ]


  useState(() => {
    // fetchCheckinLinks();
  }, [translate])

  // const data = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
      <section className='flex items-center justify-center w-screen py-12 px-3.5 sm:px-3'>
        <div className="flex items-start justify-between w-full gap-x-3.5 max-w-7xl">
          {/* filter */}
          <Filter translate={translate} setTranslate={setTranslate} />
          <span className={`fixed ${translate ? 'inline-block' : 'hidden'} top-0 left-0 w-screen h-screen bg-[#00000096] z-10`} onClick={() => setTranslate(!translate)}></span>
          {/* Properties */}
          <div className='flex flex-col items-center justify-center w-full'>
            <span className='text-md text-normal text-[#000000c7] w-full text-left' htmlFor="">Search Results for:</span>
            <span className='flex items-center justify-between w-full mt-3.5'>
              <h2 className='text-lg font-semibold text-black text-left lg:text-2xl'>{destination_name}</h2>
              <BsFilterLeft className='inline-block text-2xl text-black font-bold cursor-pointer xl:hidden' onClick={() => setTranslate(!translate)} />
            </span>
            <UnderLine />

            <span className='flex items-center justify-between w-full mb-3.5'>
              <span className='text-md text-normal text-[#000000c7] w-full text-left' htmlFor="">{properties_data.length} results found for {destination_name}</span>
              <span className='flex items-center justify-center w-48'>
                <CustomDropdown options={sortByOptions} labelName='' />
              </span>
            </span>
            <UnderLine />

            <span className='grid place-items-center w-full gap-3.5 sm:grid-cols-2 lg:grid-cols-3'>
              {
                properties_data.length !== 0 ? 
                properties_data.map((ele, index) => {
                  return (
                    <PropertiesCard key={index} name={ele.hotel_name} category={ele.hotel_translated_name} address={ele.addressline1} city={ele.city} state={ele.state} img={ele.photo1} rating={ele.star_rating} />
                  )
                })
                :
                <div className='grid col-span-3 text-[#00000094] font-semibold items-center justify-center w-full'>
                  No properties found !
                </div>
              }
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Properties