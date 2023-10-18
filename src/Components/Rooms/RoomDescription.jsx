import React from 'react'
import Description from './Description'
import Reserve from '../Sidebar/Reserve'

function RoomDescription() {
  return (
    <>
    <section className='flex items-start justify-center w-screen py-28'>
        <div className='flex flex-col items-start justify-between w-full max-w-7xl lg:flex-row'>
            <Description />
            <Reserve />
        </div>
    </section>
    </>
  )
}

export default RoomDescription