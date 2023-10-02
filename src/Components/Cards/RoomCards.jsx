import React from 'react'

// react-icons
import { AiFillStar, AiOutlineHeart, AiFillTags } from 'react-icons/ai'
import { MdOutlineCurrencyPound } from 'react-icons/md'
import Button from '../Utilities/Button'

export default function RoomCards({ img, roomName, category, hotelName, tags, price}) {
    return (
        <div className='flex cursor-pointer relative flex-col items-center justify-center rounded-sm overflow-hidden shadow-lg bg-white w-full duration-500 hover:-translate-y-1.5 hover:shadow-2xl' style={{ border: '1px solid #00000045' }}>
            <AiOutlineHeart className='absolute cursor-pointer top-5 right-6 text-xl text-white' />
            <img className=' h-[16rem] w-full object-cover' src={img} alt="error loading" />
            <span className='flex flex-col w-full py-5 px-3.5 gap-y-3.5 items-center justify-center'>
                <span className='flex items-center justify-between w-full'>
                    <span className='text-xs italic tracking-wider font-normal'>{category}</span>
                    <span className='flex items-center justify-center text-yellow-500 text-sm gap-x-0.5'>
                        <span className='text-black text-[0.7rem]'>4.5</span>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </span>
                </span>
                <span className='flex flex-col items-center justify-center w-full'>
                    <span className='text-md font-semibold text-[#000000bb] w-full text-left'>{roomName}</span>
                    <span className='flex items-start justify-start text-xs font-normal w-full text-left'>
                        <AiFillTags className='mr-1.5 text-lg text-green-600' />
                        {tags.map((ele, index)=> {
                            return (
                                <span key={index}>{ele} | </span>
                            )
                        })}
                    </span>
                </span>
                <span className='flex items-center justify-between w-full mt-0.5'>
                    <span className='flex w-full items-center justify-start'>
                        <Button labelName="view details" />
                    </span>
                    <span className='flex items-center font-semibold text-[#000000d4] justify-center gap-x-0.5'>
                        <MdOutlineCurrencyPound className='text-3xl' />
                        <span className='text-xl w-full text-left'>{price}</span>
                    </span>
                </span>
            </span>
        </div>
    )
}
