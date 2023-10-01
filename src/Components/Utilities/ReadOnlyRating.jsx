import React from 'react'
import { Rating } from '@material-tailwind/react'
import '../../Assets/CSS/Global.css'

function ReadOnlyRating({rate}) {
  return (
    <Rating className='readonlyrating flex items-center gap-x-1 text-yellow-500 justify-center text-xs' value={rate} readonly />
  )
}

export default ReadOnlyRating