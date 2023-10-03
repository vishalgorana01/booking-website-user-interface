import React from 'react'
import Description from './Description'
import Reserve from '../Sidebar/Reserve'

function RoomDescription() {
  return (
    <>
    <section className='flex items-center justify-center w-screen py-28'>
        <div className='flex items-center justify-center w-full max-w-7xl'>
            <Description />
            <Reserve />
        </div>
    </section>
    </>
  )
}

export default RoomDescription