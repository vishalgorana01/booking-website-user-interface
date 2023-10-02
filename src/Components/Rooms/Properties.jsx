import React, { useState } from 'react'
import Filter from '../Sidebar/Filter'
import UnderLine from '../Utilities/UnderLine'
import CustomDropdown from '../Utilities/CustomDropdowm'
import { propertiesData as data } from '../HardData/PropertiesData'

// react-icons
import { BsFilterLeft } from 'react-icons/bs'
import RoomCards from '../Cards/RoomCards'


export default function Properties() {
    const [translate, setTranslate] = useState(false)

    const sortByOptions = [
        { label: 'sort by', value: 'sort by' },
        { label: 'Name', value: 'Name' },
        { label: 'Low to High', value: 'Low to High' },
        { label: 'High to Low', value: 'High to Low' },
        { label: 'Recommendations', value: 'Recommendations' },
        { label: 'Default', value: 'Default' },
    ]

    useState(() => {

    }, [translate])

    // const data = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <>
            <section className='flex items-center justify-center w-screen py-28 px-3.5 sm:px-3'>
                <div className="flex items-start justify-between w-full gap-x-3.5 max-w-7xl">
                    {/* filter */}
                    <Filter translate={translate} setTranslate={setTranslate} />
                    <span className={`fixed ${translate ? 'inline-block' : 'hidden'} top-0 left-0 w-screen h-screen bg-[#00000096] z-10`} onClick={() => setTranslate(!translate)}></span>
                    {/* Properties */}
                    <div className='flex flex-col items-center justify-center w-full'>
                        <span className='text-md text-normal text-[#000000c7] w-full text-left' htmlFor="">Search Results for:</span>
                        <span className='flex items-center justify-between w-full mt-3.5'>
                            <h2 className='text-lg font-semibold text-black text-left lg:text-2xl'>Moscow</h2>
                            <BsFilterLeft className='inline-block text-2xl text-black font-bold cursor-pointer xl:hidden' onClick={() => setTranslate(!translate)} />
                        </span>
                        <UnderLine />

                        <span className='flex items-center justify-between w-full mb-3.5'>
                            <span className='text-md text-normal text-[#000000c7] w-full text-left' htmlFor="">12 results found for moscow</span>
                            <span className='flex items-center justify-center w-48'>
                                <CustomDropdown options={sortByOptions} labelName='' />
                            </span>
                        </span>
                        <UnderLine />

                        <span className='grid place-items-center w-full gap-3.5 sm:grid-cols-2 lg:grid-cols-3'>
                            {
                                data.filter((ele) => {
                                    return (ele.Address.City == 'Moscow' && ele.HotelId == '3')
                                })
                                    .map((ele1, index1) => {
                                        return (
                                            ele1.Rooms.map((ele2, index2) => {
                                                return (
                                                    <RoomCards key={index2} img={ele1.coverImage} roomName={ele2.Description} category={ele2.Type} tags={ele2.Tags} price={ele2.BaseRate} />
                                                )
                                            })
                                        )
                                    })
                            }
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}
