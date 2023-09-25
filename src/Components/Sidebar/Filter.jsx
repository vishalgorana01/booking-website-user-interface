import React from 'react'
import UnderLine from '../Utilities/UnderLine'
import Date from '../Utilities/Date'
import CustomDropdown from '../Utilities/CustomDropdowm'
import Input from '../Utilities/Input'
import SearchBar from '../Utilities/SearchBar'
import CheckboxFilter from '../Utilities/CheckboxFilter'
import Button from '../Utilities/Button'

// react-icons
import {BsArrowLeft} from 'react-icons/bs'

function Filter(props) {
    const {translate, setTranslate} = props;
    
    const GuestsOptions = [
        { label: '1 Guest', value: '1 Guest' },
        { label: '2 Guests', value: '2 Guests' },
        { label: '3 Guests', value: '3 Guests' },
        { label: '2 Guests + 1 adult', value: '3 Guests + 1 adult' },
        { label: '3 Guests + 2 adult', value: '3 Guests + 2 adult' },
    ]

    const roomCategoryOptions = [
        { label: 'Deluxe', value: 'Deluxe' },
        { label: 'Family room', value: 'Family room' },
        { label: 'Suite', value: 'Suite' },
        { label: 'Dining room', value: 'Dining room' },
        { label: 'Game room', value: 'Game room' },
        { label: 'Conservatory', value: 'Conservatory' },
        { label: 'Executive suite', value: 'Executive suite' },
        { label: 'Ballroom', value: 'Ballroom' },
    ]

    const accomodationsOptions = [
        { label: 'Eco homes' },
        { label: 'Appartments' },
        { label: 'Eco cooks' },
        { label: 'Eco hotel' },
        { label: 'Bed & stay' },
        { label: 'Eco lodger' },
    ]

    const showOnlyOptions = [
        { label: 'Business travel' },
        { label: 'Instance bookings' },
        { label: 'Pet friendly' },
        { label: 'Eco hotel' },
        { label: 'Instaposts' },
        // { label: '' },
    ]

    const moreFilterOptions = [
        { label: 'Off grid' },
        { label: 'Parking' },
        { label: 'City breaks' },
        { label: 'Wellness & spa breaks' },
        { label: 'Family friendly' },
        { label: 'Eco lodger' },
    ]
    return (
        <>
            <div className={`fixed top-0 left-0 h-screen overflow-y-scroll text-black flex-col w-full bg-white z-20 items-start justify-center shadow-xl py-3.5 px-2.5 duration-300 ${translate ? 'translate-x-0' : '-translate-x-full'} sm:w-[21rem] xl:translate-x-0 xl:flex xl:relative xl:h-auto xl:overflow-y-clip`} style={{ borderRight: '2px solid #0000002e' }}>
                {/* arrow */}
                <BsArrowLeft className='absolute inline-block top-3 right-4 text-black xl:hidden' onClick={()=> setTranslate(!translate)} />
                <span className='flex gap-x-1.5 items-center justify-start mb-3.5 w-full'>
                    <h2 className='text-lg font-normal lg:text-xl'>Filter</h2>
                    <span className='text-md font-light'>(12 properties)</span>
                </span>
                <UnderLine />

                <span className='flex flex-col items-center justify-center gap-y-3 w-full mb-8'>
                    <span className='flex items-center justify-between gap-x-2.5 w-full'>
                        <Date labelName='From' />
                        <Date labelName='To' />
                    </span>
                    <span className='flex items-center justify-center w-full'>
                        <CustomDropdown options={GuestsOptions} labelName='Guests' />
                    </span>
                    <span className='flex items-center justify-center w-full'>
                        <CustomDropdown options={roomCategoryOptions} labelName='Room Category' />
                    </span>
                    <span className='flex items-center justify-between gap-x-2.5 w-full'>
                        <Input price='458' labelName='Price' title='min' />
                        <Input price='784' labelName='Price' title='max' />
                    </span>
                    <span className='flex items-center justify-center w-full'>
                        <SearchBar labelName='Search Activities' />
                    </span>
                </span>

                <span className='flex items-center justify-center w-full mb-8'>
                    <CheckboxFilter filterName='Accomodations Category' options={accomodationsOptions} />
                </span>

                <span className='flex items-center justify-center w-full mb-8'>
                    <CheckboxFilter filterName='Show Only' options={showOnlyOptions} />
                </span>

                <span className='flex items-center justify-center w-full mb-8'>
                    <CheckboxFilter filterName='More filters' options={moreFilterOptions} />
                </span>

                <span className='flex items-center justify-start w-full mb-8'>
                    <Button labelName='Apply' />
                </span>
            </div>
        </>
    )
}

export default Filter